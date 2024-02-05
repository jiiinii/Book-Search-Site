import * as searchFunction from "./searchFunction.js";
// import * as detailInformation from "../Detail/detailInformation.js"
import * as detailDocument from "../Detail/detailDocument.js"

const uiBase = (msg, currentPage, rowsPerPage) => {
  const inputGroup = document.querySelector(".inputGroup");
  const loadingScreen = document.querySelector(".onStandby");
  const pageButton = document.querySelector(".pagingBlock");
  const numbers = document.querySelector("#numbers");
  const noResult = document.querySelector(".noResult");
  const booksEl = inputGroup.querySelector(".booksList");
  const rowsCount = msg.meta.total_count; // 총 검색 결과 수 (항목의 총 개수)
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 개수

  const first = searchFunction.firstPageButton(currentPage);
  const last = searchFunction.lastPageButton(currentPage, pageCount);

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
      <a class = 'info' bookId = "${element.isbn}"></a>`;

      booksEl.append(booksLiEl);
      inputGroup.append(booksEl);

      booksLiEl.onclick = function () {
        const bookData = element;
        console.log(bookData);
        console.log("<----------------------------------------------------------->");
        const detailThumnail = bookData.thumbnail;
        const detailTitle = bookData.title;
        const detailAuthors = bookData.authors;
        const detailTransLators = bookData.translators ? bookData.translators : '';
        const detailYear = bookData.datetime.slice(0, 4);
        const detailPrice = bookData.price;
        const detailPublisher = bookData.publisher;
        const detailSalePrice = bookData.sale_price;
        const detailContents = bookData.contents ? bookData.contents : 'No information';
        document.getElementById("library").innerHTML = detailDocument.detailDocument({
          detailThumnail,
          detailTitle,
          detailAuthors,
          detailTransLators,
          detailYear,
          detailPrice,
          detailPublisher,
          detailSalePrice,
          detailContents,
        });
        // let renderDetail;
        // renderDetail = detailInformation.bookInformation(element);
        // console.log(renderDetail);
      };
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