import search from "./Search/main.js";
import detail from "./Detail/detailInformation.js";
import bookList from "./Search/searchUI.js";

search();
console.log("search() >>> " + search());

const render = async () => {
  let url = window.location.href;
  console.log("url : " + url);

  let path = new URL(url).pathname;
  console.log("path : " + path);

  const searchParams = new URL(url).searchParams;
  console.log("searchParams >>> " + searchParams);

  const queryString = searchParams; 
  console.log("queryString >>> " + queryString);

  switch (path) { // 위의 path로 대상잡음
    case "/": // if (path === '/')
      search();
      break;  
    case "/detail/": // if (path === '/detail/')
      detail(queryString);
    case "url":
      bookList(booksEl);
      break;
  }
};
console.log("render >>> " + render);

document.addEventListener("urlchange", () => {
  console.log("urlchange >>> ");
  render();
}); // url 엔터 쳤을땐 실행 안하는 부분

window.addEventListener("popstate", () => {
  console.log("popstate >>> ");
  render();
});
