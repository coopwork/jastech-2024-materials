import React, { ChangeEvent, ReactElement } from 'react'
import { Game } from '../../types' // тип Game для типизации данных
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { List, ListItem } from './styles'

// Определение пропсов для компонента GameList
interface Props {
	err?: string // Ошибка при загрузке игр (если есть)
	games: Game[] // Список игр
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void // Функция обработки изменений в фильтре
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	// Если есть ошибка, выводим сообщение об ошибке
	if (err) {
		return <p>Unable to fetch games</p>
	}

	// Если список игр пуст, выводим сообщение о том, что игр нет
	if (!games?.length) {
		return <p>No games available</p>
	}

	return (
		<>
			{/* Компонент фильтрации игр */}
			<GameFilter onChange={onFilterChange} />
			{/* Список игр */}
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						{/* Отображение карточки игры */}
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GameList