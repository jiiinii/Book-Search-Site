//검색창에 엔터 치면 결과가 나오도록 함
// searchPost()실행
window.enterkeySearch = () => {
    if (window.event.keyCode == 13) {
        searchPost();
    }
};

window.searchPost = () => {
    console.log(`searchPost`);
    $('#input-group').empty();
    let searchQuery = $('.search-entry').val();
    console.log(`searchQuery :  ` + searchQuery);

    $.ajax({
        method: "GET",
        url: `https://dapi.kakao.com/v3/search/book`,
        data: {
            query: searchQuery,
            page: 50,
            size: 10,
            target: "",
            status: ""
        },
        headers: { Authorization: "KakaoAK 0c604b6d9932c79e6b756db42c60334b" },
        // 쿼리 파라미터 갯수 요청하기

    })
        .done(function (msg) {
            const inputGroup = document.querySelector(".input-group");
            let tmp;
            for (var i = 0; i < 10; i++) {
                tmp = `${msg.documents[i].thumbnail === ""
                    ? `<li class = "books"><img class = "book-poster-none"></img></li>`
                    : `<li class = "books"><img class = "book_poster" src="${msg.documents[i].thumbnail}"/></li>`
                }`
                displayResults(inputGroup, tmp);
                inputGroup.innerHTML += tmp;
            } // 2

            function displayResults(inputGroup, tmp) {
                // 결과를 표시하기 전에 이전 결과 지우기
                inputGroup.innerHTML = "";
                tmp.innerHTML = "";
            }
        });
}