import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo({ id: Date.now(), title, completed: false });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Add a new TODO"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add TODO</button>
        </form>
    );
}

export default TodoForm;
