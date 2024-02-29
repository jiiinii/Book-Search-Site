import { searchMarkup } from "./searchMarkup.js";
import uiBase from "./searchUI.js";
import * as searchFunction from "./searchFunction.js";
import { handlePushState } from "../Page/handlePushState.js";
import { urlConnectPage } from "../Page/urlConnectPage.js";

const rowsPerPage = 40;

const render = (keyword, page) => {
  document.getElementById("library").innerHTML = searchMarkup;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchPost(1);
  };

  const elements = {
    logoEl: document.querySelector(".logo"),
    searchFormEl: document.querySelector("form"),
    inputGroup: document.querySelector(".inputGroup"),
    beforeResult: document.querySelector(".beforeResult"),
    pageButton: document.querySelector(".pagingBlock"),
    loadingScreen: document.querySelector(".onStandby"),
    noResult: document.querySelector(".noResult"),
    booksEl: document.querySelector(".inputGroup .booksList"),
  };

  elements.searchFormEl.addEventListener("submit", handleSubmit);
  
  const searchPost = (currentPage, keyword) => {
    const searchQuery = keyword || $(".search-entry").val();
    urlConnectPage(searchQuery, currentPage);
  };

  const clearSearchResults = () => {
    const { pageButton, noResult, beforeResult, loadingScreen, booksEl } = elements;
    booksEl.innerHTML = "";
    pageButton.style.display = "none";
    noResult.style.display = "none";
    beforeResult.style.display = "none";
    loadingScreen.style.display = "block";
  };

  if (keyword) {
    clearSearchResults();
    let pageNum;

    const loading = () => {
      $.ajax({
        method: "GET",
        url: `https://dapi.kakao.com/v3/search/book`,
        data: {
          query: keyword,
          page: page,
          size: rowsPerPage,
          target: "",
          status: "",
        },
        headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
      }).done((msg) => {
        const numbers = document.querySelector("#numbers");
        numbers.innerHTML = "";

        uiBase(msg, page, rowsPerPage);

        const numbersBtn = numbers.querySelectorAll("li");
        pageNum = searchFunction.movePageBtn(page - 1);

        if (numbersBtn.length > 0) {
          numbersBtn[searchFunction.clickedNumBtn(page - 1)].classList.add("clicked");
        }

        numbersBtn.forEach((item, idx) => {
          item.addEventListener("click", (e) => {
            e.preventDefault();
            searchPost(idx + pageNum, keyword);
          });
        });
      });
    };
    setTimeout(loading, 500);
  }
  handlePushState(elements.logoEl, "/");
};
export default render;