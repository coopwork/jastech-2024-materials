import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import axios from "axios";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    // Получение списка TODO из jsonplaceholder
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => setTodos(response.data))
            .catch((error) => console.error("Error fetching todos:", error));
    }, []);

    // Добавление новой задачи
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="app">
            <h1>TODO List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
