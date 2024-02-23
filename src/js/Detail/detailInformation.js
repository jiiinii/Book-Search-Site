import * as detailDocument from "./detailDocument.js";

const bookInformation = async () => {
  const book = window.localStorage.getItem("Book");
  const result = JSON.parse(book);
  console.log("result detailDocument >>> ", result);

  document.getElementById("library").innerHTML = detailDocument.detailDocument(result);
};

export default bookInformation;