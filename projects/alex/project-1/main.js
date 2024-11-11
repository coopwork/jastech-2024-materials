const nav = document.querySelector('.nav__h');
const closeBtn = document.querySelector('.burger__close');
const openBtn = document.querySelector('.burger__open');


openBtn.addEventListener('click', ()=>{
    nav.setAttribute('data-opened', 'true')
})


closeBtn.addEventListener('click', ()=>{
    nav.setAttribute('data-opened', 'false')
})