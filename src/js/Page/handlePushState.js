export const handlePushState = (obj, path) => {
    obj.addEventListener ('click', (e) => {
        e.prevendDefault();
        window.history.pushState('', '', path);
        const urlChange = new CustomEvent({
            detail: { href: path },
        });
        document.dispatchEvent(urlChange);
    })
}