import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	tertiaryTextColor,
	secondaryColor,
	primaryTextColor,
	secondaryTextColor,
	backgroundColor,
} from 'styles/theme'; // Импорт переменных стилей
import { breakpoints } from 'styles/breakpoints'; // Импорт брейкпоинтов для адаптивности

// Стилизованный компонент ссылки, использующий react-router-dom Link
export const StyledLink = styled(Link)`
  width: 100%;
  display: inline-block;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
`;

// Стилизованный компонент изображения
export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; // Гарантирует, что изображение будет корректно вписываться
`;

// Стилизованный заголовок карточки игры
export const Title = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: 500;
	color: ${primaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis; // Обрезает текст, если он не помещается
	}
`;

// Контейнер для деталей игры (название, описание, иконки)
export const Details = styled.div`
	padding: 20px;

	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap; // Запрещает перенос текста на новую строку
	}
`;

// Стилизованное описание игры
export const Description = styled.p`
	font-size: 16px;
	color: ${secondaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

// Стилизованная иконка платформы
export const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;

// Стилизованный элемент для отображения жанра игры
export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  float: right;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // Гарантирует, что текст не будет переноситься
`;