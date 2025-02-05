import React from "react";
import styles from "./todoblock.module.css";

const ToDoItem = ({ text }) => {
  return <div className={styles.todoItem}>{text}</div>;
};

export default ToDoItem;
