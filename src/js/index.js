import { search } from './search'

const aboutSearch = () => {
    // main 영역 마크업
    document.getElementById('contents').innerHTML = search;
    const loadingEl = document.querySelector('.loading');

    // 요소 선택
    const searchFormEl = document.querySelector('form');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.button');
    const beforeResultEl = ducoment.querySelector('.beforeResult');
    let callOut = 0;



    // 검색
    const contentsSubmit = (e) => {
        e.preventDefault();

        // 첫 페이지 gif 숨기기, 로딩 gif 보이기 && 새로운 검색 결과 출력
        beforeResultEl.classList.add('hide');
        loadingEl && loadingEl.classList.add('show');

        


    };
}
export default aboutSearch;

