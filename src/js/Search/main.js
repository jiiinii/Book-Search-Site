import { searchMarkup } from "./searchMarkup.js";
import uiBase from "./searchUI.js";
import * as searchFunction from "./searchFunction.js";
import detail from '../Detail/detailInformation.js';

document.getElementById("library").innerHTML = searchMarkup;

const searchFormEl = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();
  searchPost(1);
};

searchFormEl.addEventListener("submit", handleSubmit);

const searchPost = (currentPage) => {
  let searchQuery = $(".search-entry").val();
  const inputGroup = document.querySelector(".inputGroup");
  const beforeResult = document.querySelector(".beforeResult");
  const pageButton = document.querySelector(".pagingBlock");
  const loadingScreen = document.querySelector(".onStandby");
  const noResult = document.querySelector(".noResult");
  const booksEl = inputGroup.querySelector(".booksList");
  const rowsPerPage = 40; // 한 페이지당 n개씩 보여줄 것.
  let pageNum;

  booksEl.innerHTML = "";
  pageButton.style.display = "none";
  noResult.style.display = "none";
  beforeResult.style.display = "none"; // 검색 실행 시 첫 화면 사라짐
  loadingScreen.style.display = "block";

  const greeting = () => {
    $.ajax({
      method: "GET",
      url: `https://dapi.kakao.com/v3/search/book`,
      data: {
        query: searchQuery,
        page: currentPage, // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
        size: rowsPerPage, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
        target: "",
        status: "",
        async: true,
      },
      headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
      // 쿼리 파라미터 갯수 요청하기
    }).done((msg) => {
      console.log(msg);
      const numbers = document.querySelector("#numbers");
      numbers.innerHTML = "";

      /**
       * uiBase : 위의 책 정보가 담긴 데이터를 불러오기 위한 매개체와
       *
       * 위의 데이터 안에 있는 페이지와 사이즈를 언급하는 매개변수들을
       * 화면상으로 보여주게끔
       * 꾸며주거나 계산되는 것들을 한번에 담아줌
       */
      uiBase(msg, currentPage, rowsPerPage);

      const numbersBtn = numbers.querySelectorAll("li"); // 페이지네이션 클릭
      pageNum = searchFunction.movePageBtn(currentPage - 1); // idx >= 10 일 때 페이지 버튼이 옮겨지도록 작동

      if (numbersBtn.length > 0) {
        numbersBtn[searchFunction.clickedNumBtn(currentPage - 1)].classList.add(
          "clicked"
        );
      }

      numbersBtn.forEach((item, idx) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();

          //book list update
          booksEl.innerHTML = "";
          searchPost(idx + pageNum);
        });
      });

      const render = async () => {
        let url = window.location.href;
        console.log("url >>> " + url);

        let path = new URL(url).pathname;
        console.log("path : " + path);

        const searchParams = new URL(url).searchParams;
        console.log("searchParams >>> " + searchParams);

        const queryString = searchParams.get("element");
        console.log("queryString >>> " + queryString);

        switch (
          path // 대상 -> 위의 path
        ) {
          case "/": // if (path === '/')
            break;
          case "/element/": // if (path === '/detail/')
            await detail(queryString);
            break;
        }
      };
      console.log("render >>> " + render);

      document.addEventListener("urlchange", () => {
        render();
        console.log("ddd >>> " + render()); // 썸네일을 선택했을 때만
      });

      window.addEventListener("popstate", () => {
        render();
        console.log("back or front >>> ");
      });
    });
  };
  setTimeout(greeting, 500);
};
export default searchPost;
