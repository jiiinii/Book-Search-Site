import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";

search();
console.log("search() >>> ");

const render = async () => {
  let url = window.location.href;
  console.log("url : " + url);

  let path = new URL(url).pathname;
  console.log("path : " + path);

  let urlSpace = new URL(url).pathname;
  console.log("urlSpace >>> ", urlSpace);

  const searchParams = new URL(url).searchParams;
  console.log("searchParams >>> " + searchParams);

  const queryString = searchParams; 
  console.log("queryString >>> " + queryString);

  switch (path, urlSpace) { // 위의 path로 대상잡음
    case "/": // if (path === '/')
      console.log("/");
      search();
      break;  
    case "/detail/": // if (path === '/detail/')
      console.log("/detail/");
      detail(queryString);
      break;
    case "/${searchQuery}/":
      console.log("/searchQuery/");
      search(queryString);
      break;
  }
};
console.log("render >>> ");

document.addEventListener("urlchange", () => {
  console.log("urlchange >>> ");
  render();
}); // url 엔터 쳤을땐 실행 안하는 부분

window.addEventListener("popstate", () => {
  console.log("popstate >>> ");
  render();
});