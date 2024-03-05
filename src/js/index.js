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
});

// 초기 렌더링
renderUrl();