//검색창에 엔터 치면 결과가 나오도록 함
// searchPost()실행
window.enterkeySearch = () => {
    console.log(`enterkeySearch`);
    if (window.event.keyCode == 13) {
        searchPost();
    }
};

window.searchPost = () => {
    console.log(`searchPost`);
    $('#input-group').empty();
    let searchQuery = $('.search-entry').val();
    console.log(`searchQuery :  ` + searchQuery);

    // 검색어가 비어있으면 결과를 초기화
    if (searchQuery == '') {
        $('#search-input').focus();
        return;
    }

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
            // let result = inputGroup.map((msg) => {
            //     console.log('msg : ' + msg);
            //     return msg;
            // });
            // result;
            for (var i = 0; i < 10; i++) {
                const tmp = `${ msg.documents[i].thumbnail === ""
                ? `<li class = "books"><img class = "book-poster-none"></img></li>`
                : `<li class = "books"><img class = "book_poster" src="${msg.documents[i].thumbnail}"/></li>`}`
                inputGroup.innerHTML += tmp;
            } // 2

            if (searchQuery != '') {
                $('.books').remove();
            }

        });
}