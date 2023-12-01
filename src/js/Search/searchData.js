import { getbooks } from '/src/js/Api';
import { searchResultRender } from '/src/js/Search/searchResultRender';

export const searchData = async(bookTitle, year, pagenation ) => {
    const loadingEl = document.querySelector('.loading');
    const booksData = [];
    for(let i = 1; i <= pagenation; i++) {
        const response  = await getbooks(bookTitle, year, i);
        response.Response ==='True'
        ? booksData.push(...response.Search)
        : booksData.push(...[]);
    }
    loadingEl && loadingEl.classList.remove('show');
    searchResultRender(booksData);
}