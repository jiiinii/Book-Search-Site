export const handlePushState = (obj, path, bookData) => {
    obj.addEventListener('click', () => {
        window.localStorage.setItem('Book', JSON.stringify(bookData));
        console.log("handlePushState_bookData_set >>> ", window.localStorage.setItem);

        window.history.pushState('', '', path);
        const urlChange = new CustomEvent('urlchange', {
            detail: { href: path },
        });
        document.dispatchEvent(urlChange);
    });
};