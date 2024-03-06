const firstPageButton = (currentPage) => {
    const first = Math.floor((currentPage - 1 ) / 10) * 10 + 1;
    return first;
}

const lastPageButton = (currentPage, pageCount) => {
    const first = firstPageButton(currentPage);
    const last = first + 10 > pageCount ? pageCount + 1 : first + 10;
    return last;
}

const movePageBtn = (idx) => {
    let pageNum = 1;
    if (idx >= 10) {
        const idxTmp = Math.floor(idx / 10);
        pageNum = idxTmp * 10;
    }
    return pageNum;
}

const clickedNumBtn = (idx) => {
    let tmp = idx;
    if (idx >= 10) {
        const idxTmp = Math.floor(idx / 10);
        tmp = idx - 10 * idxTmp + 1;
    }
    return tmp;
}

export {
    firstPageButton,
    lastPageButton,
    movePageBtn,
    clickedNumBtn
}