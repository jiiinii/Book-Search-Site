export const searchMarkup = `
<form action="" method="search_line" onsubmit="return false">
<input class="search-entry" type="input" placeholder="Search for book titles & authors"
    minlength="3" maxlength="250" required />
<div class="filterFuction">
    <button type="submit" class="btn">Search</button>
</div>
</form>

<!-------------------- result ----------------------->
<div class="input-group">
<div class="beforeResult">
    <img class="waiting" src="src/img/duck.gif" />
    <p class="findBefore">Find your's book.....💕</p>
</div>
<div class="onStandby">
    <img class="loading" src="src/img/resultLoading.gif" />
    <p class="moment">Please wait a moment🎶</p>
</div>
<ul class="booksList"></ul>
</div>

<!------------------------- page ------------------------->
<div class="pagingBlock">
<div id="numbers">
</div>
</div>

<!------------------------- footer ------------------------->
<footer>Made by. Jin Hui Park<br /><br />
Github : <a
    href="https://github.com/jiiinii/open_api">https://github.com/jiiinii/open_api</a><br /><br />
e-mail : jiinii_wish@naver.com
</footer>`;
