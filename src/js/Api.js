//검색창에 엔터 치면 결과가 나오도록 함
// searchPost()실행
window.enterkeySearch = () => {
  if (window.event.keyCode == 13) {
    searchPost();
  }
};

window.searchPost = () => {
  let searchQuery = $(".search-entry").val();

  const inputGroup = document.querySelector(".input-group");
  //  const beforeResult = document.querySelector(".beforeResult");
  //   const loadingScreen = document.querySelector(".onStandby");
  const pageButton = document.querySelector(".pagingBlock");
  const booksEl = document.createElement("ul");

  //   beforeResult.style.display = "none"; // 검색 실행 시 첫 화면 사라짐
  //   loadingScreen && loadingScreen.classList.add("show");
  inputGroup.innerHTML = "";
  booksEl.className = "booksList";
  pageButton.style.display = "block"; // 페이지 버튼 출력

  let pageNationHTML = "";
  var currentPage = 1;
  var rowsPerPage = 8; // 한 페이지당 n개씩 보여줄 것.

  $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: searchQuery,
      page: currentPage, // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      size: rowsPerPage, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
      target: "",
      status: "",
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
    // 쿼리 파라미터 갯수 요청하기
    success: function () {
      // return Math.ceil(data.length / sizeVal); // data.length = 총 파싱해 온 데이터 수량
    },
  }).done((msg) => {
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
                    <a class = 'info' bookId = "${element.isbn}">
                    <p>${bookTitleEl}</p>
                    <p>${bookPriceEl}</p>
                    </a>
                    `;
        booksEl.append(booksLiEl);
        inputGroup.append(booksEl);
      });
    } else {
      const noResults = document.createElement("p");
      noResults.className = "no_result";
      noResults.innerText =
        "The book could not be found T.T \n\n Try searching another keyword.";

      inputGroup.append(noResults);
      pageButton.style.display = "none";
    }

    // 페이지네이션 기능

    const rowsCount = msg.meta.total_count; // 총 검색 결과 수 (항목의 총 개수)
    const pageCount = Math.ceil(rowsCount / rowsPerPage); // 최대 페이지 개수
    const numbers = document.querySelector('#numbers');
    

    console.log("rowsCount : " + rowsCount);
    console.log("pageCount : " + pageCount);

    for(let a = 1; a <= pageCount; a++) {
        numbers.innerHTML += `<li class = "page_box"><a href="${currentPage}">${a}</a></li>`;
    }
  });


};
