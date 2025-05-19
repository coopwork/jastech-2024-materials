// Определяем массив доступных платформ, на которых могут работать игры
export const PLATFORMS = [
	{
		value: 'browser', // Значение, которое будет отправляться в запросах
		display: 'Browser (Web)', // Отображаемое название в UI
	},
	{
		value: 'pc',
		display: 'Windows (PC)',
	},
]

// Определяем массив жанров игр
export const GENRES = [
	{
		value: 'mmo',
		display: 'MMO',
	},
	{
		value: 'mmorpg',
		display: 'MMORPG',
	},
	{
		value: 'shooter',
		display: 'Shooter',
	},
	{
		value: 'strategy',
		display: 'Strategy',
	},
	{
		value: 'moba',
		display: 'Moba',
	},
	{
		value: 'card',
		display: 'Card Games',
	},
	{
		value: 'racing',
		display: 'Racing',
	},
	{
		value: 'sports',
		display: 'Sports',
	},
	{
		value: 'social',
		display: 'Social',
	},
	{
		value: 'fighting',
		display: 'Fighting',
	},
]

// Определяем массив тегов, которые помогут фильтровать игры по дополнительным параметрам
export const TAGS = [
	{
		value: 'mmofps',
		display: 'MMOFPS', // Многопользовательский шутер от первого лица
	},
	{
		value: 'action-rpg',
		display: 'Action RPG', // Ролевые игры с активными сражениями
	},
	{
		value: 'sandbox',
		display: 'Sandbox', // Игры с открытым миром и свободой действий
	},
	{
		value: 'open-world',
		display: 'Open World', // Игры с открытым миром
	},
	{
		value: 'survival',
		display: 'Survival', // Игры на выживание
	},
	{
		value: 'battle-royale',
		display: 'Battle Royale', // Королевская битва (PUBG, Fortnite и т. д.)
	},
	{
		value: 'mmotps',
		display: 'MMOTPS', // Многопользовательский шутер от третьего лица
	},
	{
		value: 'anime',
		display: 'Anime', // Аниме-игры
	},
	{
		value: 'pvp',
		display: 'PvP', // Игры, сфокусированные на сражениях между игроками
	},
	{
		value: 'pve',
		display: 'PvE', // Игры, сфокусированные на борьбе с окружающим миром и NPC
	},
	{
		value: 'fantasy',
		display: 'Fantasy', // Фэнтези-игры
	},
	{
		value: 'sci-fi',
		display: 'Sci-Fi', // Научная фантастика
	},
]

// Определяем возможные параметры сортировки списка игр
export const SORT_BY = [
	{
		value: 'relevance',
		display: 'Relevance', // По релевантности (по умолчанию)
	},
	{
		value: 'popularity',
		display: 'Popularity', // По популярности
	},
	{
		value: 'release-date',
		display: 'Release Date', // По дате выхода
	},
	{
		value: 'alphabetical',
		display: 'Alphabetical', // В алфавитном порядке
	},
]