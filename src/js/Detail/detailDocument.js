export const detailDocument = (bookData) => {
  return `
  <form action="" method="post">
    <input class = "search-entry" 
    type="text" 
    placeholder="Search for book titles & authors"
    minlength="3" 
    maxlength="250" 
    required 
    />
    <div class = "filterFuction">
        <button type="submit" class = "btn">Search</button>
    </div>
  </form>
  <div class = "detailContentContainer">
    <div class = "detailPoster">
    ${
      bookData.thumbnail === ""
        ? `<img class = "bookPosterNone">`
        : `<img class = "bookPoster" src="${bookData.thumbnail}" 
        alt="${bookData.thumbnail}의 책 표지"/>`
    }
    </div>
    <div class = "detailContentDesc">
      <h3 class = "detailTitle">${bookData.title}</h3>
        <ul class = "detailInfo">
          ${
            bookData.authors.length == '0'
              ? `<li class = "detailAuthor">지은이 : 정보없음</li>`
              : `<li class = "detailAuthor">지은이 : ${bookData.authors}</li>`
          }
          ${
            bookData.translators.length == '0'
              ? `<li class = "detailTransLators">옮긴이 : 정보없음</li>`
              : `<li class = "detailTransLators">옮긴이 : ${bookData.translators}</li>`
          }
          ${
            bookData.publisher == ""
              ? `<li class = "detailPublisher">출판사 : 정보없음</li>`
              : `<li class = "detailPublisher">출판사 : ${bookData.publisher}</li>`
          }
        </ul>
        <h5></h5>
        <ul class = "detailInfo">
          ${
            bookData.datetime.slice(0, 4) == ""
              ? `<li class = "detailYear">출간년도 : 정보없음</li>`
              : `<li class = "detailYear">출간년도 : ${bookData.datetime.slice(0, 4)} 년</li>`
          }
          ${
            bookData.price == 0
              ? `<li class = "detailPrice">정가 : - 원</li>`
              : `<li class = "detailPrice">정가 : ${bookData.price}원</li>`
          }
          ${
            bookData.sale_price == -1 || bookData.sale_price == 0
              ? `<li class = "detailSalePrice">판매가 : - 원</li>`
              : `<li class = "detailSalePrice">판매가 : ${bookData.sale_price}원</li>`
          }
        </ul>
        <ul class = "detailInfo">
        ${
          bookData.contents
            ? `<li class = "detailContents">'${bookData.title}' 의 정보 :<br /><br /> 
            <p class = "contentInfo">${bookData.contents}...</p>
            </li>`
            : `<li class = "detailContents">'${bookData.title}' 의 정보 :<br /><br /> 
            <p class = "contentInfo">정보 없음</p>
            </li>`
        }
        </ul>
    </div>
  </div>`;
};