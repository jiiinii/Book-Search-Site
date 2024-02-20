import * as detailDocument  from "./detailDocument.js";

const bookInformation = async () => {
  const book = window.localStorage.getItem("Book"); // string 형태임 -> 
  const result = JSON.parse(book);
  console.log("result >>> ", result);
  document.getElementById("library").innerHTML = detailDocument.detailDocument(result);
};

export default bookInformation;