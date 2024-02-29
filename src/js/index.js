import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";

const getUrlParams = () => {
  const url = new URL(window.location.href);
  const path = url.pathname;
  const keyword = url.searchParams.get("keyword");
  const page = url.searchParams.get("page");

  return { path, keyword, page };
};

const renderUrl = async () => {
  const { path, keyword, page } = getUrlParams();

  switch (path) {
    case "/":
    case "/search":
      search(keyword, page);
      break;
    case "/detail/":
      detail(keyword);
      break;
    default:
      break;
  }
};

document.addEventListener("urlchange", renderUrl);
window.addEventListener("popstate", renderUrl);

// 초기 렌더링
renderUrl();