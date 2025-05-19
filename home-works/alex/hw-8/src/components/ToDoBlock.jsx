import { useEffect, useState } from "react";
import "./todo.css";
import Button from "./Button";

const ToDoBlock = () => {
   const [todos, setTodos] = useState([]);
   const [newTodo, setNewTodo] = useState("");

   
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
         .then((response) => response.json())
         .then((json) => setTodos(json))
         .catch((error) => console.error("Ошибка загрузки:", error));
   }, []);

  
   const handleAddTodo = () => {
      const trimmed = newTodo.trim();
      if (!trimmed) return;

      const newItem = {
         id: Date.now(), 
         title: trimmed,
      };

      setTodos([newItem, ...todos]);
      setNewTodo("");
   };

   return (
      <div>
         <h1>TODO LIST</h1>

         <div className="todo_add">
            <input
               type="text"
               value={newTodo}
               onChange={(e) => setNewTodo(e.target.value)}
               placeholder="Введите текст"
            />
            <Button onClick={handleAddTodo}>Добавить</Button>
         </div>

         <div className="container">
            {todos.map((item) => (
               <div className="card" key={item.id}>
                  <div className="todo_id">ID: {item.id}</div>
                  <div className="todo_text">{item.title}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ToDoBlock;

