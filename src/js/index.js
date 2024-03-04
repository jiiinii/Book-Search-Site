import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";

const getUrlParams = () => {
  const url = new URL(window.location.href); //
  console.log("url URL >>> ", url);
  const path = url.pathname; // case 조건문 읽어옴
  const keyword = url.searchParams.get("keyword");
  const page = url.searchParams.get("page");
  const isbn = url.searchParams.get("isbn");

  console.log("path >>> ", path, "keyword >>> ", keyword, "page >>> ", page, "isbn >>> ", isbn);
  return { path, keyword, page, isbn };
};

const renderUrl = async () => {
  console.log("renderUrl >>> ", renderUrl);
  const { path, keyword, page, isbn } = getUrlParams();

  switch (path) {
    case "/":
      console.log("////////////");
      search();
      break;
    case "/search":
      console.log("/search/search/");
      search(keyword, page);
      break;
    case "/detail/":
      console.log("/detail/detail/");
      detail(keyword, isbn);
      break;
  }
};

document.addEventListener("urlchange", () => {
  renderUrl(); // 엔터 칠 땐 읽혀지지 않음
});
window.addEventListener("popstate", () => { 
  console.log("back or front >>> ");
  renderUrl();
});

// 초기 렌더링
renderUrl();