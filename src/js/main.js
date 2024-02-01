import { searchMarkup } from "./searchMarkup.js";
import uiBase from "./searchUI.js";
import * as searchFunction from "./searchFunction.js";

document.getElementById("library").innerHTML = searchMarkup;

const searchFormEl = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();
  searchPost(1);
};

searchFormEl.addEventListener("submit", handleSubmit);

const searchPost = (currentPage) => {
  let searchQuery = $(".search-entry").val();

  if (searchQuery == "") {
    $(".beforeResult").focus();
    return;
  }

  const inputGroup = document.querySelector(".input-group");
  const beforeResult = document.querySelector(".beforeResult");
  const loadingScreen = document.querySelector(".onStandby");
  const numbers = document.querySelector("#numbers");
  const noResults = document.querySelector(".no_result");
  const booksEl = inputGroup.querySelector(".booksList");
  const rowsPerPage = 40; // 한 페이지당 n개씩 보여줄 것.
  let pageNum = 1;

  numbers.innerHTML = "";
  noResults.innerHTML = "";
  booksEl.innerHTML = "";
  noResults.style.display = "none";
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
      uiBase(msg, currentPage, rowsPerPage);

      const numbersBtn = numbers.querySelectorAll("li"); // 페이지네이션 클릭
      pageNum = searchFunction.pageButtonClick(currentPage - 1);

      if (numbersBtn.length > 0) {
        numbersBtn[searchFunction.clickedNumBtn(currentPage - 1)].classList.add("clicked");
      }

      numbersBtn.forEach((item, idx) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();

          //book list update
          booksEl.innerHTML = "";
          searchPost(idx + pageNum);
        });
      });
    });
  };
  setTimeout(greeting, 500);
};
export default searchPost;