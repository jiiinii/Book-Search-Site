export const searchSubmit = (msg, currentPage) => {
  console.log(msg);

  // 페이지네이션 기능
  const inputGroup = document.querySelector(".input-group");
  const numbers = document.querySelector("#numbers");
  const rowsPerPage = 40; // 한 페이지당 n개씩 보여줄 것.
  const rowsCount = msg.meta.total_count; // 총 검색 결과 수 (항목의 총 개수)
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 개수
  const pageCal = 10;
  let pageNum = 1;

  const booksEl = inputGroup.querySelector(".booksList");

  let first = Math.floor((currentPage - 1) / pageCal) * 10 + 1;
  let last = first + 10 > pageCount ? pageCount + 1 : first + 10;

  numbers.innerHTML = "";

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

  const numbersBtn = numbers.querySelectorAll("li"); // 페이지네이션 클릭
  displayRow(currentPage - 1);

  numbersBtn.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      //book list update
      booksEl.innerHTML = "";
      searchPost(idx + pageNum);
    });
  });

  // 페이지 버튼 클릭시 css적용
  function displayRow(idx) {
    let tmp = idx;

    if (idx >= 10) {
      const idxTmp = Math.floor(idx / 10);
      tmp = idx - 10 * idxTmp + 1;
      pageNum = idxTmp * 10;
    }

    if (numbersBtn.length > 0) {
      numbersBtn[tmp].classList.add("clicked");
    }
  }
};