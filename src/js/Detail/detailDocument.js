export const detailDocument = ({
  detailThumnail,
  detailTitle,
  detailAuthors,
  detailTransLators,
  detailYear,
  detailPrice,
  detailPublisher,
  detailSalePrice,
  detailContents,
}) => {
  return `
  <div class = "detailContentContainer">
    <div class = "detailPoster">
    ${
      detailThumnail === ""
        ? `<img class = "bookPosterNone">`
        : `<img class = "bookPoster" src="${detailThumnail.replace(
            "SX300",
            "SX450"
          )}" alt="${detailTitle}의 책 표지"/>`
    }
    </div>
    <div class = "detailContentDesc">
    <h3 class = "detailTitle">${detailTitle}</h3>
    <ul class = "detailInfo">
      ${detailAuthors ? `<li class = "detailAuthor">${detailAuthors}</li>` : '정보 없음'}
      ${detailYear ? `<li class = "detailYear">${detailYear}</li>` : '정보 없음'}
    </ul>
    </div>
    </div>
  </div>`;
};
