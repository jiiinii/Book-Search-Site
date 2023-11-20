// import {search} from '.search';

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: {
        query: "소크라테스",
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
        for (var i = 0; i < 10; i++) {
            const tmp = `<ul class = "result_books">
        <li class = "books">
        <img class = "book_poster" src="${msg.documents[i].thumbnail}"/><br/>
        </li>
        </ul>
        `
            inputGroup.innerHTML += tmp;
        } // 2
    });

//검색창에 엔터 치면 결과가 나오도록 함
// searchPost()실행
window.enterkeySearch = () => {
    if (window.event.keyCode == 13) {
        searchPost();
    }
};


window.searchPost = () => {
    $('#home-section-post').empty();
    let searchQuery = $('#search-input').val();
    console.log(`searchQuery :  ` + searchQuery);
    if (searchQuery == '') {
        alert('검색어를 입력해주세요!');
        $('#search-input').focus();
        return;
    }
}

// const afterResult = () => {
//     // main 영역 마크업
//     document.getElementById('contents').innerHTML = search;
    
//     const 

// }
// export default afterResult;



// none thumbnail 대체 이미지 구현
const msg = document.createElement('li');
msg.documents.className = 'book';

msg.documents.innerHTML = `
${
    msg.documents[i].thumbnail === 'N/A'
        ? `<div class="search_thumbnail_none"></div>`
        : `<img class = "book_poster" src="${msg.documents[i].thumbnail}" alt="${msg.documents[i].title}의 썸네일"/>`
}
<a href = "></a>
`;
