// Определение типа Filter, который представляет собой объект с параметрами фильтрации
export type Filter = {
	platform: string
	genre?: string
	tag?: string
	sortBy: string
}