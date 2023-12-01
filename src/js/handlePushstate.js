export const handlePushstate = (element, path) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState('', '', path);
        const urlChange = new CustomEvent('urlChange', {
            detail: { href : path},
        });
        document.dispatchEvent(urlChange);
    });
};