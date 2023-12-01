export const search = `
<form action method="search_line">
    <input class="search-input" type="input" placeholder="책 제목 및 저자 검색" onkeyup="enterkeySearch()" minlength="3" maxlength="250" required />
    <button type="button" type="submit" class="btn btn-outline-primary" onclick="searchPost()">search</button>
</form>

<!------------------------- result ------------------------->
<div class = "beforeResult">
    <img src = "src/img/duck.gif" />
    <p>Find your's book.</p>
</div>
<div class = "loading">
    <div></div>
    <div></div>
    <div></div>
</div>
`;