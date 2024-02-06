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
  <form action="" method="post">
    <input class="search-entry" 
    type="text" 
    placeholder="Search for book titles & authors"
    minlength="3" 
    maxlength="250" 
    required 
    />
    <div class="filterFuction">
        <button type="submit" class="btn">Search</button>
    </div>
  </form>
  <div class = "detailContentContainer">
    <div class = "detailPoster">
    ${
      detailThumnail === ""
        ? `<img class = "bookPosterNone">`
        : `<img class = "bookPoster" src="${detailThumnail}" 
        alt="${detailTitle}의 책 표지"/>`
    }
    </div>
    <div class = "detailContentDesc">
      <h3 class = "detailTitle">${detailTitle}</h3>
        <ul class = "detailInfo">
          ${
            detailAuthors.length == '0'
              ? `<li class = "detailAuthor">지은이 : 정보없음</li>`
              : `<li class = "detailAuthor">지은이 : ${detailAuthors}</li>`
          }
          ${
            detailTransLators.length == '0'
              ? `<li class = "detailTransLators">옮긴이 : 정보없음</li>`
              : `<li class = "detailTransLators">옮긴이 : ${detailTransLators}</li>`
          }
          ${
            detailPublisher == ""
              ? `<li class = "detailPublisher">출판사 : 정보없음</li>`
              : `<li class = "detailPublisher">출판사 : ${detailPublisher}</li>`
          }
        </ul>
        <h5></h5>
        <ul class = "detailInfo">
          ${
            detailYear == ""
              ? `<li class = "detailYear">출간년도 : 정보없음</li>`
              : `<li class = "detailYear">출간년도 : ${detailYear} 년</li>`
          }
          ${
            detailPrice == 0
              ? `<li class = "detailPrice">정가 : - 원</li>`
              : `<li class = "detailPrice">정가 : ${detailPrice}원</li>`
          }
          ${
            detailSalePrice == -1 || detailSalePrice == 0
              ? `<li class = "detailSalePrice">할인가 : - 원</li>`
              : `<li class = "detailSalePrice">할인가 : ${detailSalePrice}원</li>`
          }
        </ul>
        <ul class = "detailInfo">
        ${
          detailContents
            ? `<li class = "detailContents">'${detailTitle}' 의 정보 :<br /><br /> 
            <p class = "contentInfo">${detailContents}...</p>
            </li>`
            : `<li class = "detailContents">'${detailTitle}' 의 정보 :<br /><br /> 
            <p class = "contentInfo">정보 없음</p>
            </li>`
        }
        </ul>
    </div>
  </div>`;
};
