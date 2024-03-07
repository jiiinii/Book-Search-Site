export function getBooks(keyword, page) {
  return $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book`,
    data: {
      query: keyword,
      page: page,
      size: 40,
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
  });
}