import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import useFetch from 'hooks/useFetch'  // хук для получения данных
import GameListRender from './GameList.render'  // компонент для отображения списка игр
import { Filter } from './types'  // типы для фильтра

// Контейнерный компонент для списка игр
const GameListContainer = (): ReactElement => {
  // Инициализация состояния фильтра с дефолтными значениями
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',  // Платформа по умолчанию - браузер
    sortBy: 'relevance',  // Сортировка по умолчанию - релевантность
  })

  // Получаем игры и ошибку с помощью хука useFetch, передаем текущие фильтры
  const { games, error } = useFetch(filter)

  // Обработчик изменения фильтров
  const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    // Обновление состояния фильтра в зависимости от изменения поля в форме
    setFilter(current => ({
      ...current,  // Сохраняем текущие значения фильтра
      [event.target.name]: event.target.value,  // Обновляем только измененное поле
    }))
    
    // Предотвращаем перезагрузку страницы, если используется форма
    event.preventDefault()
  }, [])

  // Возвращаем компонент отображения списка игр, передавая данные и обработчик
  return (
    <GameListRender err={error} games={games} onFilterChange={onFilterChange} />
  )
}

export default GameListContainer