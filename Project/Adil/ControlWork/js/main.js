const menuBtn = document.querySelector('.menuBtn');
const menuClose = document.querySelector('.menuClose');
const menuList = document.querySelector('.menuList');
const menuShadow = document.querySelector('.menu_close');

menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('menuListOpen')
    menuShadow.classList.toggle('menu_open')
});

menuClose.addEventListener('click', ()=> {
    menuList.classList.remove('menuListOpen')
    menuShadow.classList.remove('menu_open')
});