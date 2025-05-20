const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Закрытие меню при клике на любой пункт
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});