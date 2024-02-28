export const urlConnectPage = (path, msg, currentPage) => {
    window.localStorage.setItem('bookList', JSON.stringify(msg)); // 데이터 저장
    window.history.pushState('', '', `search?keyword=${path}&page=${currentPage}`);
    const urlChange = new CustomEvent('urlchange', {
        detail: { href: path },
    });
    document.dispatchEvent(urlChange);
}