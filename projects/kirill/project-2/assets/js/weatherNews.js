// weatherNews.js
const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "63fbea316ff947dcb427d644c8bd6d79"; // Ваш API-ключ

/**
 * Получение новостей о погоде
 * @param {number} limit - Количество новостей для отображения
 */
export async function fetchNews(limit) {
  const query = "(погода OR температура OR градус OR холод) AND Россия";

  try {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(
        query
      )}&language=ru&pageSize=${limit}&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles.map((article) => ({
      title: article.title,
      description: article.description || "Описание недоступно.",
      url: article.url,
      imageUrl: article.urlToImage || "default-image.jpg", // Добавляем URL изображения (если оно есть)
    }));
  } catch (error) {
    console.error("Ошибка при загрузке новостей:", error);
    return [];
  }
}
