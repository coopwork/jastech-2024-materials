import React, { ReactElement } from 'react' 
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import { Game } from 'types' 
import { BROWSER, WINDOWS } from './constants'
import { 
	StyledLink, 
	Img, 
	Title, 
	Details, 
	Description, 
	Icon, 
	Genre 
} from './styles' 

// Определяем интерфейс пропсов, ожидаем объект типа Game
interface Props { 
	content: Game 
}

// Компонент GameCard, который принимает пропс content и возвращает карточку игры
const GameCard = ({ content }: Props): ReactElement => { 
	// Деструктурируем нужные свойства из объекта content
	const { id, title, thumbnail, short_description, genre, platform } = content
	
	// Разбиваем platform (список платформ) на массив, удаляя лишние пробелы
	const icons = platform.split(',').map(p => { 
		let icon = null 
		switch (p.trim()) { 
			// Если игра поддерживает браузер, добавляем соответствующую иконку
			case BROWSER: 
				icon = ( 
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} /> 
				) 
				break 
			// Если игра поддерживает Windows, добавляем иконку Windows
			case WINDOWS: 
				icon = ( 
					<Icon key={`${id}-windows`} alt="windows icon" src={windowsIcon} /> 
				) 
				break 
			default: 
				break 
		} 
		return icon 
	}) 
	
	// Формируем ссылку на страницу с игрой
	const link = `/game/${id}` 

	return ( 
		// Создаем карточку с игрой, оборачивая в стилизованную ссылку StyledLink
		<StyledLink to={link}> 
			<Img alt={`${title}-logo`} src={thumbnail} /> 
			<Details> 
				<Title>{title}</Title> 
				<Description>{short_description}</Description> 
				<Genre>{genre}</Genre> 
				{icons} 
			</Details> 
		</StyledLink> 
	) 
} 

export default GameCard