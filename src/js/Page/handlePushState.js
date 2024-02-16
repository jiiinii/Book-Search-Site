export const handlePushState = (obj, path) => {
    obj.addEventListener ('click', (e) => {
        e.prevendDefault();
        window.history.onpopstate('', '', path);
        const urlChange = new CustomEvent('urlchange',{
            detail: { href: path },
        });
        document.dispatchEvent(urlChange);
    });
};