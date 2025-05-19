// news.js
import { fetchNews } from "./weatherNews.js"; // Импортируем функцию для загрузки новостей

document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById("news-container");
  const newsCountInput = document.getElementById("news-count");
  const loadNewsBtn = document.getElementById("load-news-btn");

  const loadNews = async () => {
    const count = parseInt(newsCountInput.value, 10) || 4; // Установим количество новостей (по умолчанию 4)
    newsContainer.innerHTML = "<p>Загрузка новостей...</p>"; // Показать сообщение загрузки

    const newsArticles = await fetchNews(count);

    // Ограничиваем количество новостей
    const limitedNews = newsArticles.slice(0, count);

    // Очищаем контейнер
    newsContainer.innerHTML = "";

    if (limitedNews.length === 0) {
      newsContainer.innerHTML =
        "<p>Не удалось найти новости. Попробуйте позже.</p>";
      return;
    }

    limitedNews.forEach((news) => {
      const newsItem = document.createElement("div");
      newsItem.className = "news-item";

      // Добавляем изображение, если оно есть
      const newsImage = news.imageUrl
        ? `<img src="${news.imageUrl}" alt="Изображение новости" class="news-image" />`
        : "";

      // Формируем HTML новостей
      newsItem.innerHTML = `
        ${newsImage}
        <h2><a href="${news.url}" target="_blank">${news.title}</a></h2>
        <p>${news.description || "Описание недоступно"}</p>
      `;
      newsContainer.appendChild(newsItem);
    });
  };

  // Загрузка новостей при нажатии на кнопку
  loadNewsBtn.addEventListener("click", loadNews);

  // Загрузка новостей при открытии страницы
  loadNews();
});
