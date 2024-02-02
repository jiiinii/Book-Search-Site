import * as detailDocument  from "./detailDocument.js";

const bookInformation = (element) => {
  const bookData = element;
  console.log(bookData);
  console.log("<--------------------------------------->");
  const detailThumnail = bookData.thumbnail;
  const detailTitle = bookData.title;
  const detailAuthors = bookData.authors;
  const detailTransLators = bookData.translators ? bookData.translators : "";
  const detailYear = bookData.datetime;
  const detailPrice = bookData.price;
  const detailPublisher = bookData.publisher;
  const detailSalePrice = bookData.sale_price;
  const detailContents = bookData.contents;
  document.getElementById("library").innerHTML = detailDocument({
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
};

export default bookInformation;