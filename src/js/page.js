//검색창에 엔터 치면 결과가 나오도록 함
// searchPost()실행
window.enterkeySearch = () => {
    if (window.event.keyCode == 13) {
        searchPost();
    }
};


window.searchPost = () => {
    $('#input-group').empty();
    let searchQuery = $('#search-input').val();
    console.log(`searchQuery :  ` + searchQuery);
    if (searchQuery == '') {
        $('#search-input').focus();
        return;
    }
}

// export const searchFunction = (library) => {
//     const resultsEl = document.querySelector('.');
// }
