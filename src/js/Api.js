$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: {
        query: "animal",
        page: 50,
        size: 10,
        target: "",
        status: ""
    },
    headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
    // 쿼리 파라미터 갯수 요청하기

})
    .done(function (msg) {
        console.log(msg);
        const inputGroup = document.querySelector(".input-group");
        for (var i = 0; i < 10; i++) {
            const tmp = `
        <li class = "books">
        <img class = "book_poster" src="${msg.documents[i].thumbnail}"/><br/>
        </li>
        `
            inputGroup.innerHTML += tmp;
        } // 2
    });