import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

function App() {
  const [todoList, setTodoList] =useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => {
        const initialTodos = response.data.map((item) => ({
          taskName: item.title,
        }))
        setTodoList(initialTodos)
      })
      .catch((error) => {
        console.error('ошибка', error)
    })
  }, [])

  const addTask = (taskName) => {
    const newTask = { taskName }
    setTodoList([...todoList, newTask])
  }

  return (
    <>
      <div className='container'>
        <h1>Todo list</h1>

        <AddTodo addTask={addTask} />
        <div>
          <ul className='list-items'>
            {todoList.map((item, index) =>(
              <TodoItem key={index} taskName={item.taskName} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
