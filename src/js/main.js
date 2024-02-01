import { searchMarkup } from "./searchMarkup.js";
import uiBase from "./searchUI.js";
import * as searchFunction from "./searchFunction.js";

document.getElementById("library").innerHTML = searchMarkup;

const searchFormEl = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();
  searchPost();
};

searchFormEl.addEventListener("submit", handleSubmit);

const searchPost = (currentPage = 1) => {
  console.log("currentPage >>> " + currentPage);
  let searchQuery = $(".search-entry").val();

  if (searchQuery == "") {
    $(".beforeResult").focus();
    return;
  }

  const inputGroup = document.querySelector(".inputGroup");
  const beforeResult = document.querySelector(".beforeResult");
  const loadingScreen = document.querySelector(".onStandby");
  const numbers = document.querySelector("#numbers");
  const noResult = document.querySelector(".noResult");
  const booksEl = inputGroup.querySelector(".booksList");
  const rowsPerPage = 40; // 한 페이지당 n개씩 보여줄 것.
  let pageNum;

  numbers.innerHTML = ""; //?? 위치바꿔
  booksEl.innerHTML = "";
  noResult.style.display = "none"; //같음
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
        numbersBtn[searchFunction.clickedNumBtn(currentPage - 1)].classList.add("clicked");
      }

      /**
       * item : li 태그 요소를 다룸
       */
      numbersBtn.forEach((item, idx) => {
        item.addEventListener("click", (e) => {
          console.log("item >>> " + item);
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