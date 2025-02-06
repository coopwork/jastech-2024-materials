// SEARCH FORM
const searchBtn = document.querySelector(".search__btn");
const searchForm = document.querySelector(".search-container-hide");
const searchClose = document.querySelector(".search-button-close");
const searchInput = document.querySelector('.search-input');


if (searchBtn && searchForm && searchClose) {
   searchBtn.addEventListener("click", () => {
    document.querySelector('.search-input').focus();
       searchForm.classList.remove("search-container-hide");
       searchForm.classList.add("search-container-show");
       searchInput.focus();
   });
   searchClose.addEventListener("click", () => {
  
       searchForm.classList.remove("search-container-show");
       searchForm.classList.add("search-container-hide");
       searchForm.style.opacity = '50%'
   });
} else {}


document.addEventListener('click', (e) => {
    const withOut = e.composedPath().includes(searchForm);
    const withOut2 = e.composedPath().includes(searchBtn);
    
    if (!withOut && !withOut2) {
       searchForm.classList.remove("search-container-show");
       searchForm.classList.add("search-container-hide");   

    }
})


