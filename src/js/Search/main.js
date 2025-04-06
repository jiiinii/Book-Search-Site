import { searchMarkup } from "./searchMarkup.js";
import { handlePushState } from "../Page/handlePushState.js";
import { urlConnectPage } from "../Page/urlConnectPage.js";
import { getBooks } from "../api.js";
import uiBase from "./searchUI.js";
import * as mainEvent from "./mainEvent.js";

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
    booksEl: document.querySelector(".bookList"),
  };

  elements.searchFormEl.addEventListener("submit", handleSubmit);

  const searchPost = (currentPage, keyword) => {
    const searchQuery = keyword || $(".search-entry").val();
    urlConnectPage(searchQuery, currentPage);
  };

  const clearSearchResults = () => {
    const { pageButton, noResult, beforeResult, loadingScreen, booksEl } =
      elements;
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
      const keywordResult = getBooks(keyword, page, rowsPerPage);
      keywordResult.done((msg) => {
        const numbers = document.querySelector("#numbers");

        uiBase(msg, page, rowsPerPage, keyword);

        const numbersBtn = numbers.querySelectorAll("li");
        pageNum = mainEvent.movePageBtn(page - 1);

        if (numbersBtn.length > 0) {
          numbersBtn[mainEvent.clickedNumBtn(page - 1)].classList.add(
            "clicked"
          );
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
