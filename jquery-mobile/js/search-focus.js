
function myFunction(x){
    const findWrapper = document.querySelector('.find-wrapper');
const searchFind = document.querySelector('.search-find');
const inputSearch = document.querySelector('.ui-input-search');
const cancel = document.querySelector('.cancel');
const uiFilterable = document.querySelector('.ui-filterable');
    uiFilterable.style.display = 'flex'
    findWrapper.style.display = 'none';
    searchFind.style.display = 'block';
    inputSearch.style.width = '260px';
    cancel.style.display = 'flex'
    cancel.addEventListener('click', function() {
        findWrapper.style.display = 'block';
        searchFind.style.display = 'none';
        inputSearch.style.width = '100%';
        cancel.style.display = 'none';
    })
}


function toDetail() {
    window.location.href='book-detail.html'
}
