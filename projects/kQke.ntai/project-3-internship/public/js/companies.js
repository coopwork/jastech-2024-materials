const galleryCompanies = document.querySelector(".companies__gallery");
const slidesCompanies = document.querySelectorAll(".companies__card");
const totalSlidesCompanies = slidesCompanies.length;

if (!galleryCompanies || !slidesCompanies.length) {
  console.error("Gallery or slides not found!");
}

let slideIndexCompanies = 0;
let autoScrollInterval; // Переменная для хранения интервала автопрокрутки

const rightButtonsCompanies = document.querySelectorAll(".companies__right");
const leftButtonsCompanies = document.querySelectorAll(".companies__left");

function initEventHandlersCompanies() {
  if (!galleryCompanies || !slidesCompanies.length) return;

  // Добавляем обработчики событий для кнопок
  leftButtonsCompanies.forEach((btn) =>
    btn.addEventListener("click", () => changeSlideCompanies(-1))
  );

  rightButtonsCompanies.forEach((btn) =>
    btn.addEventListener("click", () => changeSlideCompanies(1))
  );

  // Останавливаем автопрокрутку при наведении на галерею
  galleryCompanies.addEventListener("mouseenter", stopAutoScrollCompaniesы);
  galleryCompanies.addEventListener("mouseleave", startAutoScroll);

  // Запускаем автопрокрутку при инициализации
  startAutoScroll();
}

function changeSlideCompanies(direction) {
  // Обновляем индекс слайда с учетом цикличности
  slideIndexCompanies =
    (slideIndexCompanies + direction + totalSlidesCompanies) %
    totalSlidesCompanies;
  updateGalleryCompanies();
}

function updateGalleryCompanies() {
  if (!galleryCompanies || !totalSlidesCompanies) return;

  // Сбрасываем стили для всех слайдов
  slidesCompanies.forEach((slide) => {
    slide.style.filter = "grayscale(100%)";
    slide.style.backgroundColor = "#f4f4f4";
    slide.style.boxShadow = "none";
  });

  // Применяем стили к текущему слайду
  const currentSlide = slidesCompanies[slideIndexCompanies];
  if (currentSlide) {
    currentSlide.style.filter = "grayscale(0%)";
    currentSlide.style.backgroundColor = "#fff";
    currentSlide.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  }

  const styleCompanies = getComputedStyle(galleryCompanies);
  const gapCompanies = parseFloat(styleCompanies.gap);
  const widthCartCompanies = slidesCompanies[0].offsetWidth + gapCompanies;

  galleryCompanies.style.transform = `translateX(-${
    slideIndexCompanies * widthCartCompanies
  }px)`;
}

// Функция для запуска автопрокрутки
function startAutoScroll() {
  stopAutoScrollCompaniesы(); // Останавливаем предыдущий интервал, если он существует
  autoScrollInterval = setInterval(() => changeSlideCompanies(1), 3000); // Прокрутка каждые 3 секунды
}

// Функция для остановки автопрокрутки
function stopAutoScrollCompaniesы() {
  clearInterval(autoScrollInterval);
}

// Инициализация
initEventHandlersCompanies();
updateGalleryCompanies();
