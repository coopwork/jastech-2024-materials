import { useEffect, useState } from "react";
import "./todo.css";
import Button from "./Button";


const ToDoBlock = () => {
   // https://jsonplaceholder.typicode.com/todos/
   // Отобразить 10 TODO и форму для создания нового TODO
   //  и добавление созданного TODO в общий лист
   //   с остальными TODO карточками
   const [state, setState] = useState([]);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
         .then((response) => response.json())
         .then((json) => setState(json));
   });

   return (
      <div>
    

		 <h1>TODO</h1>

         <div className="todo_add">
            <input type="text" />
            <Button>Добавить</Button>
         </div>

         <div className="container">
            {state.map((item) => (
               <div className="card">
                  {" "}
                  <div className="todo_id">ID: {item.id}</div>
                  <div className="todo_text">{item.title} </div>{" "}
               </div>
            ))}
         </div>
      </div>
   );
};

export default ToDoBlock;
