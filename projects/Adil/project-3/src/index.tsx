import React from 'react'  // Импортируем React (необходим для JSX-синтаксиса)
import { createRoot } from 'react-dom/client'  // Импортируем функцию для создания корня React-приложения (начиная с React 18)
import App from 'components/App'  // Импортируем главный компонент приложения

// Получаем элемент с id="root" (это тот элемент, куда будет монтироваться приложение)
const root = createRoot(document.getElementById('root') as HTMLElement);  // Приводим элемент к типу HTMLElement для TypeScript

// Монтируем компонент App в элемент с id="root"
root.render(<App />);  // Рендерим главный компонент приложения (App) в DOM