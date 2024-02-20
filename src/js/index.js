import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";

search();
console.log("search() >>> " + search());

const render = async () => {
  let url = window.location.href;
  console.log("url : " + url);

  let path = new URL(url).pathname;
  console.log("path : " + path);

  const searchParams = new URL(url).searchParams;
  console.log("searchParams >>> " + searchParams);

  const queryString = searchParams.get("id"); 
  console.log("queryString >>> " + queryString);

  switch (path) { // 위의 path로 대상잡음
    case "/": // if (path === '/')
      search();
      break;
    case "/detail/": // if (path === '/detail/')
      await detail(queryString);
      break;
  }
};
console.log("render >>> " + render);

document.addEventListener("urlchange", () => {
  render();
});

window.addEventListener("popstate", () => {
  render();
});
