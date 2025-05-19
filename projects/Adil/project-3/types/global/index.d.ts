// Объявление модуля для импорта SVG файлов как строк
declare module '*.svg' {
	// При импорте SVG файла, содержимое будет строкой (строкой с кодом SVG)
	const content: string;
  
	// Экспортируем содержимое SVG как строку
	export default content;
  }  