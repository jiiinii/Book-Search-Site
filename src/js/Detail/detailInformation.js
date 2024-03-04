import * as detailDocument from "./detailDocument.js";

const bookInformation = (keyword, isbn) => {
  console.log("keyword_detail >>>> ", keyword, "isbn_detail >>>> ", isbn);
  $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: keyword,
      page: 1,
      size: 40,
      target: "",
      status: "",
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
  }).done((msg) => {
    console.log("detail_msg >>> ", msg);
    document.getElementById("library").innerHTML = detailDocument.detailDocument(msg.documents[1]);
  });
};

export default bookInformation;