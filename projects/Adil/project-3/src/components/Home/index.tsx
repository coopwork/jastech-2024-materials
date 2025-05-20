import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc/withErrorBoundary'  // Higher Order Component для обработки ошибок

const Home = (): ReactElement => <GameList />  // рендерим компонент GameList

// Оборачиваем компонент Home в withErrorBoundary для обработки ошибок
export default withErrorBoundary(Home)