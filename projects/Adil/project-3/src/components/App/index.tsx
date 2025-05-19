import React, { FC, ReactElement } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from 'components/Home' 

// Главный компонент приложения, использует React Router для управления маршрутизацией.
const App: FC = (): ReactElement => ( 
	<BrowserRouter> {/* Оборачиваем приложение в BrowserRouter для работы с маршрутизацией */}
		<Routes> {/* Контейнер для маршрутов */}
          <Route path="/" element={<Home />} /> {/* Определяем маршрут, который рендерит Home при переходе на '/' */}
        </Routes>
	</BrowserRouter>
)

export default App // Экспортируем компонент для использования в других частях приложения