export const urlConnectPage = (urlSpace, msg) => {
    window.localStorage.setItem('bookList', JSON.stringify(msg));
    console.log("urlConnectPage_bookData >>> ", window.localStorage.setItem);

    window.history.pushState('', '', urlSpace);
    const urlChange = new CustomEvent('urlchange', {
        detail: { href: urlSpace },
    });
    document.dispatchEvent(urlChange);
}