import { useState, useEffect } from 'react'  // Импортируем хуки useState и useEffect из React
import axios from 'axios'  // Импортируем библиотеку для выполнения HTTP-запросов
import { Game } from 'types'  // Импортируем тип для игры
import { API_HOST, API_KEY } from './constants'  // Импортируем константы с API хостом и ключом
import { Filter } from 'components/GameList/types'  // Импортируем тип для фильтров

// Тип для структуры ответа от API
type Response = {
  games: Game[]  // Массив игр, который вернется из API
  error: string  // Строка с ошибкой, если она произошла
}

// Хук useFetch для получения данных об играх с учетом переданных фильтров
const useFetch = (params: Filter): Response => {
  // Состояния для хранения списка игр и ошибки
  const [games, setGames] = useState<Game[]>([])  // Состояние для списка игр
  const [err, setErr] = useState<string>('')  // Состояние для ошибки

  // Извлекаем значения фильтров
  const { platform, genre, tag, sortBy } = params

  // useEffect выполняется при изменении фильтров (platform, genre, tag, sortBy)
  useEffect(() => {
    // Выполняем GET-запрос с помощью axios для получения игр с учетом фильтров
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,  // Указываем базовый URL API
        headers: {
          'x-rapidapi-key': API_KEY,  // Добавляем API ключ в заголовки
          'x-rapidapi-host': API_HOST,  // Указываем хост для API
        },
        params: {
          platform,  // Платформа, полученная из фильтров
          category: genre,  // Жанр, полученный из фильтров
          tag,  // Тег, полученный из фильтров
          'sort-by': sortBy,  // Сортировка, полученная из фильтров
        },
      })
      .then(res => setGames(res.data))  // Если запрос успешен, обновляем состояние с играми
      .catch(e => setErr(e.message))  // Если ошибка, сохраняем сообщение об ошибке
  }, [platform, genre, tag, sortBy])  // Эффект зависит от фильтров, будет выполняться при их изменении

  // Возвращаем объект с играми и ошибкой
  return {
    games,
    error: err,  // Если ошибка произошла, она будет передана в компонент
  }
}

export default useFetch  // Экспортируем хук для использования в других компонентах