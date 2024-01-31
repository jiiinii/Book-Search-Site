import * as searchFunction from "./searchFunction.js";

const uiBase = (msg, currentPage, rowsPerPage) => {
  const inputGroup = document.querySelector(".input-group");
  const loadingScreen = document.querySelector(".onStandby");
  const pageButton = document.querySelector(".pagingBlock");
  const numbers = document.querySelector("#numbers");
  const noResults = document.querySelector(".no_result");
  const booksEl = inputGroup.querySelector(".booksList");
  const rowsCount = msg.meta.total_count; // 총 검색 결과 수 (항목의 총 개수)
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 개수

  const first = searchFunction.firstPageButton(currentPage);
  const last = searchFunction.lastPageButton(currentPage, pageCount);

  loadingScreen.style.display = "none";
  pageButton.style.display = "block";

  if (msg.documents.length !== 0) {
    msg.documents.forEach((element) => {
      const booksLiEl = document.createElement("li");
      booksLiEl.className = "books";

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

      booksLiEl.innerHTML = `${
        element.thumbnail === ""
          ? `<img class = "book-poster-none">`
          : `<img class = "book_poster" src="${element.thumbnail}" alt="${element.title}의 책 표지"/>`
      }
      <a class = 'info' bookId = "${element.isbn}"></a>`;

      booksEl.append(booksLiEl);
      inputGroup.append(booksEl);
    });
  } else {
    noResults.innerHTML = "";
    noResults.style.display = "block";

    noResults.innerText =
      "The book could not be found T.T \n\n Try searching another keyword.";
    inputGroup.append(noResults);
    pageButton.style.display = "none";
  }

  if (first >= 11) {
    numbers.innerHTML += `<li class = "page_box"><a><</a></li>`;
  }

  for (var i = first; i < last; i++) {
    console.log("i >>> " + i);
    numbers.innerHTML += `<li class = "page_box"><a id= ${i}> ${i} </a></li>`;
  }

  if (last - first == 10 && last - 1 != pageCount) {
    numbers.innerHTML += `<li class = "page_box"><a>></a></li>`;
  }
};

export default uiBase;