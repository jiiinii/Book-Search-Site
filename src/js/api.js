export async function getBooks(keyword, page, rowsPerPage) {
  $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: keyword,
      page: page,
      size: rowsPerPage,
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
  });
}
export async function getBooksDetail(keyword, resultPage, page) {
  $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: keyword,
      page: page,
      size: resultPage,
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
  });
}
