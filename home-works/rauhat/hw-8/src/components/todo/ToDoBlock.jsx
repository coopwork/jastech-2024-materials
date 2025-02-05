import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import styles from "./todoblock.module.css";

const ToDoBlock = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, title: text };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className={styles.todoBlock}>
      <h2 className={styles.headText}>TODO List</h2>
      <ToDoForm addTodo={addTodo} />
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} text={todo.title} />
        ))}
      </div>
    </div>
  );
};

export default ToDoBlock;
