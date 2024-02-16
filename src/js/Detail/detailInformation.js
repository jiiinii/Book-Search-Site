import * as detailDocument  from "./detailDocument.js";

const bookInformation = async (element) => {
  const bookData = element;
        bookData.thumbnail;
        bookData.title;
        bookData.authors;
        bookData.translators;
        bookData.datetime.slice(0, 4);
        bookData.price;
        bookData.publisher;
        bookData.sale_price;
        bookData.contents;
  document.getElementById("library").innerHTML = detailDocument.detailDocument(bookData);
};

export default bookInformation;