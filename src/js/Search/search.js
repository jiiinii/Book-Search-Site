export const search = `
<form action="" method="search_line">
<input class="search-entry" type="input" placeholder="Search for book titles & authors"
    onkeyup="enterkeySearch()" minlength="3" maxlength="250" required />
<div class="filterFuction">
    <button type="button" class="btn" onclick="searchPost()">Search</button>
</div>
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