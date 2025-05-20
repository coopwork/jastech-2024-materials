import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

// Стилизованный список игр
export const List = styled.ul`
	display: block;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	list-style-type: none;
	box-sizing: border-box;

	// Адаптация списка для планшетов
	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	// Адаптация списка для десктопов
	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

// Стилизованный элемент списка (карточка игры)
export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	// Анимация увеличения карточки при наведении
	&:hover {
		transform: scale(1.02);
	}

	// Размещение карточек в строку на планшетах
	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;
		&:nth-of-type(even) {
			margin-right: 0;
		}
	}

	// Размещение карточек в строку на десктопах
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;
		&:nth-of-type(even) {
			margin-right: 24px;
		}
		&:nth-of-type(3n + 3) {
			margin-right: 0;
		}
	}
`