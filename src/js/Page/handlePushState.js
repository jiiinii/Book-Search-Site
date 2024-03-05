export const handlePushState = (obj, isbn, keyword, currentPage) => {
    obj.addEventListener('click', () => {
        window.history.pushState('', '', `/detail/?keyword=${keyword}&page=${currentPage}&isbn=${isbn}`);
        const urlChange = new CustomEvent('urlchange', {
            detail: { href: isbn },
        });
        document.dispatchEvent(urlChange);                                                                     
    });
};