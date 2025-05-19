import styled from 'styled-components' // Импортируем styled-components для создания стилизованных компонентов
import { backgroundColor, secondaryTextColor } from 'styles/theme' // Импортируем цвета из глобальной темы для стилизации
import { breakpoints } from 'styles/breakpoints' // Импортируем брейкпоинты для адаптивности

// Стилизованный компонент формы
export const Form = styled.form`
	display: flex; 
	justify-content: space-between; 
	max-width: 542px; 
	padding: 0 16px; 
	margin: 24px auto; 
	color: ${secondaryTextColor}; 
	box-sizing: border-box; 
	
	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet}; 
		// ширина формы на планшетах
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px; 
		// больше пространства на больших экранах
	}
`

// Стилизованный компонент Label (метка для select)
export const Label = styled.label`
	display: inline-block; 
	margin-right: 16px; 
	flex-basis: 25%; 
	&:last-of-type {
		margin-right: 0;
	}
`

// Стилизованный компонент Select (выпадающий список)
export const Select = styled.select`
	width: 100%; 
	margin-top: 8px; 
	color: white; 
	background-color: ${backgroundColor};
`