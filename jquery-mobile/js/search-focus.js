
function myFunction(x){
    const findWrapper = document.querySelector('.find-wrapper');
const searchFind = document.querySelector('.search-find');
const inputSearch = document.querySelector('.ui-input-search');
const cancel = document.querySelector('.cancel');
const uiFilterable = document.querySelector('.ui-filterable');
    uiFilterable.style.display = 'flex'
    findWrapper.style.display = 'none';
    searchFind.style.display = 'block';
    inputSearch.style.width = '80%';
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


function addMore() {
    window.location.href='book-mall.html'
}
function toMessage() {
    window.location.href='my-message.html'
}
function toSelfInfo() {
    window.location.href="self-info.html"
}