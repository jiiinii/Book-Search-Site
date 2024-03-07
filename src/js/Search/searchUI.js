import { handlePushState } from "../Page/handlePushState.js";
import * as mainEvent from "./mainEvent.js";

const uiBase = (msg, currentPage, rowsPerPage, keyword) => {
  const inputGroup = document.querySelector(".inputGroup");
  const loadingScreen = document.querySelector(".onStandby");
  const pageButton = document.querySelector(".pagingBlock");
  const numbers = document.querySelector("#numbers");
  const noResult = document.querySelector(".noResult");
  const booksEl = inputGroup.querySelector(".bookList");
  const rowsCount = msg.meta.total_count; // 총 검색 결과 수 (항목의 총 개수)
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 개수

  const first = mainEvent.firstPageButton(currentPage);
  const last = mainEvent.lastPageButton(currentPage, pageCount);

  loadingScreen.style.display = "none";

  if (msg.documents.length !== 0) {
    msg.documents.forEach((element) => {
      pageButton.style.display = "block";

      const booksLiEl = document.createElement("li");
      booksLiEl.className = "book";

      // 책 제목
      let bookTitleEl = "";
      if (element.title) {
        bookTitleEl =
          element.title.length > 25
            ? element.title.slice(0, 25) + "..."
            : element.title;
      }

      // 책 가격
      let bookPriceEl = "";
      if (element.price) {
        bookPriceEl = element.price;
      }

      // 책 표지
      booksLiEl.innerHTML = `${
        element.thumbnail === ""
          ? `<img class = "bookPosterNone">`
          : `<img class = "bookPoster" src="${element.thumbnail}" alt="${element.title}의 책 표지"/>`
      }
      <a class = 'info' id = "${element.isbn}">
        <p>${bookTitleEl}</p>
        <p>${bookPriceEl} 원</p>
      </a>`;

      booksEl.append(booksLiEl);
      inputGroup.append(booksEl);

      handlePushState(booksLiEl, element.isbn , keyword, currentPage);
    });
  } else {
    noResult.style.display = "block";
    pageButton.style.display = "none";
  }

  if (first >= 11) {
    numbers.innerHTML += `<li class = "page_box"><a><</a></li>`;
  }

  for (var i = first; i < last; i++) {
    numbers.innerHTML += `<li class = "page_box"><a id= ${i}> ${i} </a></li>`;
  }

  if (last - first == 10 && last - 1 != pageCount) {
    numbers.innerHTML += `<li class = "page_box"><a>></a></li>`;
  }
};

export default uiBase;