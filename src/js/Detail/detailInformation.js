import * as detailDocument from "./detailDocument.js";

const bookInformation = async (bookData) => {
  const book = window.localStorage.getItem("Book");
  const result = JSON.parse(book);
  console.log("result detailDocument >>> ", result);

  window.localStorage.setItem('Document', JSON.stringify(bookData));
  document.getElementById("library").innerHTML = detailDocument.detailDocument(result);
};

export default bookInformation;