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

    // 검색
    const contentsSubmit = (e) => {
        e.preventDefault();
        beforeResultEl.classList.add('hide');
        loadingEl && loadingEl.classList.add('show');




    }
}
export default aboutSearch;

