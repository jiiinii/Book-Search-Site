export const urlConnectPage = (urlSpace, msg) => {
    window.localStorage.setItem('bookList', JSON.stringify(msg));
    console.log("urlConnectPage_bookData_set >>> ", window.localStorage.setItem);
    console.log(`urlSpace : ${urlSpace}`)
    window.history.pushState('', '', urlSpace);
    const urlChange = new CustomEvent('urlchange', {
        detail: { href: urlSpace },
    });
    document.dispatchEvent(urlChange);
}