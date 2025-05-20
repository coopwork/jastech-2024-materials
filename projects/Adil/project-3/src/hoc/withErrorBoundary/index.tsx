import React, { Component, ComponentClass, ComponentType } from 'react'

// Интерфейс для состояния, которое будет использоваться в ErrorBoundary
export interface State {
  hasError: boolean  // Поле, которое указывает, произошла ли ошибка
}

// Функция HOC (Higher Order Component), которая оборачивает компонент в обработчик ошибок
const withErrorBoundary = <T extends Record<string, never>>(
  WrappedComponent: ComponentType<T>  // Компонент, который мы будем оборачивать
): ComponentClass<T, State> =>  // Возвращаем класс, который будет обрабатывать ошибки и рендерить компонент
  class ErrorBoundary extends Component<T, State> {
    // Конструктор класса, инициализируем состояние с ошибкой
    constructor(props: T) {
      super(props)
      this.state = { hasError: false }  // Изначально ошибок нет
    }

    // Статический метод для обработки ошибок и обновления состояния
    static getDerivedStateFromError(error: Error) {
      console.error(error)  // Логируем ошибку в консоль
      return { hasError: true }  // Обновляем состояние на наличие ошибки
    }

    // Метод рендеринга
    render() {
      // Если произошла ошибка, отображаем сообщение об ошибке
      if (this.state.hasError) {
        return <p>Something went wrong.</p>  // Сообщение, если ошибка была поймана
      }

      // Если ошибки нет, рендерим обернутый компонент
      return <WrappedComponent {...this.props} />
    }
  }

export default withErrorBoundary  // Экспортируем HOC для использования в других компонентах