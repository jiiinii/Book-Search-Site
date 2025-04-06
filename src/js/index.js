import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";

const getUrlParams = () => {
  const url = new URL(window.location.href);
  const path = url.pathname;
  const keyword = url.searchParams.get("keyword");
  const page = url.searchParams.get("page");
  const isbn = url.searchParams.get("isbn");
  return { path, keyword, page, isbn };
};

const renderUrl = async () => {
  const { path, keyword, page, isbn } = getUrlParams();

  switch (path) {
    case "/":
      search();
      break;
    case "/search":
      search(keyword, page);
      break;
    case "/detail/":
      detail(keyword, isbn, page);
      break;
  }
};

document.addEventListener("urlchange", () => {
  renderUrl();
});
window.addEventListener("popstate", () => {
  renderUrl();
  if (location.pathname === "/") {
    const elements = {
      logoEl: document.querySelector(".logo"),
      searchFormEl: document.querySelector("form"),
      inputGroup: document.querySelector(".inputGroup"),
      beforeResult: document.querySelector(".beforeResult"),
      pageButton: document.querySelector(".pagingBlock"),
      loadingScreen: document.querySelector(".onStandby"),
      noResult: document.querySelector(".noResult"),
      booksEl: document.querySelector(".bookList"),
    };

    elements.booksEl.style.display = "none";
    elements.pageButton.style.display = "none";
    elements.noResult.style.display = "none";
    elements.loadingScreen.style.display = "none";
    elements.beforeResult.style.display = "block";
  }
});

// 초기 렌더링
renderUrl();
