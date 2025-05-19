document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[type="radio"]');
  const content = document.querySelectorAll(".content");

  // Сброс состояния радиокнопок при клике вне галереи
  document.body.addEventListener("click", (event) => {
    // Если клик был вне контента (картинок) и радиокнопок, сбрасываем радиокнопки
    if (
      !event.target.closest(".content") &&
      !event.target.closest('input[type="radio"]')
    ) {
      radios.forEach((radio) => (radio.checked = false));
    }
  });

  // Предотвращаем срабатывание события на самой картинке
  content.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // Чтобы клик по картинке не срабатывал на body
    });
  });
});
