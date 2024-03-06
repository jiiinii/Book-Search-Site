import { getBooksDetail } from "../api.js";
import * as detailDocument from "./detailDocument.js";

const resultPage = 40;

const bookInformation = (keyword, isbn, page) => {
  const detailData = getBooksDetail(keyword, resultPage, page);
  detailData.done((msg) => {
    for (var i = 0; i < msg.documents.length; i++) {
      const bookData = msg.documents[i];
      if (isbn === bookData.isbn) {
        document.getElementById("library").innerHTML = detailDocument.detailDocument(bookData);
      }
    }
  });
};

export default bookInformation;