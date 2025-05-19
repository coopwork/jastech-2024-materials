import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <li style={styles.item}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)} style={styles.button}>
        X
      </button>
    </li>
  );
}

const styles = {
  item: {
    listStyle: "none",
    margin: "10px",
    fontSize: "18px",
  },
  button: {
    marginLeft: "15px",
    color: "white",
    backgroundColor: "red",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default TodoItem;
