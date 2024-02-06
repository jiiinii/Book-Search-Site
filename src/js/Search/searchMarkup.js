export const searchMarkup = `
<form action="" method="post">
    <input class="search-entry" 
    type="text" 
    placeholder="Search for book titles & authors"
    minlength="3" 
    maxlength="250" 
    required 
    />
    <div class="filterFuction">
        <button type="submit" class="btn">Search</button>
    </div>
</form>

<!-------------------- result ----------------------->
<div class="inputGroup">
    <div class="beforeResult">
        <img class="waiting" src="src/img/duck.gif" />
        <p class="findBefore">Find your's book.....💕</p>
    </div>
    <div class="onStandby">
        <img class="loading" src="src/img/resultLoading.gif" />
        <p class="moment">Please wait a moment🎶</p>
    </div>
    <ul class="booksList"></ul>
    <div class = "noResult">
        <p class = "noResultNotification">
        The book could not be found T.T<br /><br />
        Try searching another keyword.
        </p>
    </div>
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