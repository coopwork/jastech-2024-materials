import React, { useState } from "react";
import styles from "./todoblock.module.css";

const ToDoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new TODO"
        className={styles.todoInput}
      />
      <button type="submit" className={styles.todoButton}>
        Create
      </button>
    </form>
  );
};

export default ToDoForm;
