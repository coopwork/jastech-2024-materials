// Получаем все необходимые элементы
const menuBtn = document.querySelector('.menuBtn');
const menuClose = document.querySelector('.menuCloseBtn');
const menuList = document.querySelector('.menuList');
const menuShadow = document.querySelector('.menu_close');

// Проверка наличия элементов на странице
if (menuBtn && menuClose && menuList && menuShadow) {
    // Открытие меню
    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('menuListOpen'); // Переключаем класс для отображения меню
        menuShadow.classList.toggle('menu_open'); // Переключаем класс для затемнения фона
    });

    // Закрытие меню
    menuClose.addEventListener('click', () => {
        menuList.classList.remove('menuListOpen'); // Убираем класс для скрытия меню
        menuShadow.classList.remove('menu_open'); // Убираем класс для снятия затемнения фона
    });

    // Дополнительное закрытие меню при клике на затемненный фон
    menuShadow.addEventListener('click', () => {
        menuList.classList.remove('menuListOpen'); // Убираем класс для скрытия меню
        menuShadow.classList.remove('menu_open'); // Убираем класс для снятия затемнения фона
    });
}
