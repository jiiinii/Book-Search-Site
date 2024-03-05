import * as detailDocument from "./detailDocument.js";

const resultPage = 40;

const bookInformation = (keyword, isbn, page) => {
  $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: keyword,
      page: page,
      size: resultPage,
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
  }).done((msg) => {
    for (var i = 0; i < msg.documents.length; i++) {
      const bookData = msg.documents[i];
      if (isbn === bookData.isbn) {
        document.getElementById("library").innerHTML = detailDocument.detailDocument(bookData);
      }
    }
  });
};

export default bookInformation;