/**
 * 버튼이 1~10단위로 보여지기 위해서 계산된 ㅇㅇ
 * 다음 버튼을 눌렀을 때 첫번째로 보여질 페이지 버튼 기능?이기도 함
 * @param {*} currentPage 결과 페이지 번호.
 * 무조건 n0 + 1이라는 결과가 나올 수 밖에 없삼
 * @returns
 */
const firstPageButton = (currentPage) => {
    const first = Math.floor((currentPage - 1 ) / 10) * 10 + 1;
    return first;
}

/**
 * 다음 버튼 배치를 위한 계산.
 * @param {*} pageCount 총 페이지 개수
 * @returns 
 */
const lastPageButton = (currentPage, pageCount) => {
    const first = firstPageButton(currentPage);
    const last = first + 10 > pageCount ? pageCount + 1 : first + 10;
    return last;
}

/**
 * idx >= 10 일 때 페이지 버튼이 옮겨지도록 작동
 * 첫 페이지에서 잘 작동되는 것을 보고 idx를 가지고 계산하여
 * @param {*} idx 버튼의 해당 번호. 0부터
 * @returns 
 * 
 */
const movePageBtn = (idx) => {
    let pageNum = 1;
    if (idx >= 10) {
        const idxTmp = Math.floor(idx / 10);
        pageNum = idxTmp * 10;
    }
    return pageNum;
}

/**
 * 마찬가지로 idx 매개변수를 이용하여 
 * css가 적용되도록 계산
 * 버튼이 옮겨지는 현상은 movePageBtn과 같은 개념이기 때문에
 * 이에 따라 같은 계산법으로 이용 됨 
 * */
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