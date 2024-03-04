export const handlePushState = (obj, isbn, keyword) => {
    obj.addEventListener('click', () => {
        window.history.pushState('', '', `/detail/?keyword=${keyword}&isbn=${isbn}`);
        const urlChange = new CustomEvent('urlchange', {
            detail: { href: isbn },
        });
        document.dispatchEvent(urlChange);                                                                     
    });
};