import { useState, useEffect } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        const newTask = {
            id: todos.length + 1,
            title: newTodo,
            completed: false,
        };
        setTodos([...todos, newTask]);
        setNewTodo("");
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">TODO List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task"
                    className="flex-1 border p-2 rounded-l"
                />
                <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    Add
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="border p-2 mb-2 rounded flex justify-between">
                        <span>{todo.title}</span>
                        <span>{todo.completed ? "✅" : "❌"}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
