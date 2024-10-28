const nav = document.querySelector('.navigation');
const closeBtn = document.querySelector('.burger_close');
const openBtn = document.querySelector('.burger_open');


openBtn.addEventListener('click', ()=>{
  nav.setAttribute('data-opened', 'true')
})

closeBtn.addEventListener('click', ()=>{
  nav.setAttribute('data-opened', 'false')
})