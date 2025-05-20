// Тип для игры, описывает структуру данных, которые будут приходить от API
export type Game = {
	id: number  // Уникальный идентификатор игры
	title: string  // Название игры
	thumbnail: string  // URL изображения для миниатюры игры
	short_description: string  // Краткое описание игры
	game_url: string  // Ссылка на страницу игры
	genre: string  // Жанр игры (например, RPG, шутер)
	platform: string  // Платформа, на которой доступна игра (например, browser, PC)
	publisher: string  // Издатель игры
	developer: string  // Разработчик игры
	release_date: string  // Дата выпуска игры
	freetogame_profile_url: string  // URL профиля игры на сайте FreeToGame
  }  