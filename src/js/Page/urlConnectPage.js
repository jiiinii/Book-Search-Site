export const urlConnectPage = (path, currentPage) => {
    console.log("urlConnectPage >>>");
    window.history.pushState('', '', `search?keyword=${path}&page=${currentPage}`);
    // window.history.pushState = 문서를 담은 창에 페이지 이동 없이 주소만 바꿔준다.
    console.log("window.history.pushState", window.history.pushState);
    const urlChange = new CustomEvent('urlchange', {
        // new CustomEvent: 사용자가 생성한 이벤트
        detail: { href: path }, //이벤트 발생시 넘기고 싶은 정보를 담은것
    });
    document.dispatchEvent(urlChange); //CustomEvent 내용(urlchange) 호출
    console.log("document.dispatchEvent >>> ", urlChange);
}