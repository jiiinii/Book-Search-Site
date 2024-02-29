export const urlConnectPage = (path, currentPage) => {
    window.history.pushState('', '', `search?keyword=${path}&page=${currentPage}`);
    const urlChange = new CustomEvent('urlchange', {
        detail: { href: path },
    });
    document.dispatchEvent(urlChange);
}