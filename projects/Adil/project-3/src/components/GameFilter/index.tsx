import React, { ChangeEvent, ReactElement } from 'react' // ChangeEvent — для обработки событий изменения формы, ReactElement — тип, который обозначает, что компонент возвращает JSX
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constants'
import { Form, Label, Select } from './styles'

// Определяем тип пропсов, которые принимает компонент
interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void 
	// Функция-обработчик изменений в форме
}

// Фильтр игр — управляет выбором платформы, жанра, тегов и сортировки
const GameFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}> 
		{/* Форма, которая вызывает функцию onChange при изменении любого элемента */}
		
		{/* Фильтр по платформам */}
		<Label htmlFor="platform-select">
			Platform:
			<Select name="platform" id="platform-select">
				{/* Заполняем список платформ из массива PLATFORMS */}
				{PLATFORMS.map(platform => (
					<option key={platform.value} value={platform.value}>
						{platform.display}
					</option>
				))}
			</Select>
		</Label>

		{/* Фильтр по жанрам */}
		<Label htmlFor="genre-select">
			Genre:
			<Select name="genre" id="genre-select">
				<option value="">All Genres</option> 
				{/* Опция "все жанры" */}
				{GENRES.map(genre => (
					<option key={genre.value} value={genre.value}>
						{genre.display}
					</option>
				))}
			</Select>
		</Label>

		{/* Фильтр по тегам */}
		<Label htmlFor="tag-select">
			Tag:
			<Select name="tag" id="tag-select">
				<option value="">All Tags</option> 
				{/* Опция "все теги" */}
				{TAGS.map(tag => (
					<option key={tag.value} value={tag.value}>
						{tag.display}
					</option>
				))}
			</Select>
		</Label>

		{/* Фильтр по сортировке */}
		<Label htmlFor="sortBy-select">
			Sort By:
			<Select name="sortBy" id="sortBy-select">
				{SORT_BY.map(sortBy => (
					<option key={sortBy.value} value={sortBy.value}>
						{sortBy.display}
					</option>
				))}
			</Select>
		</Label>
	</Form>
)

export default GameFilter