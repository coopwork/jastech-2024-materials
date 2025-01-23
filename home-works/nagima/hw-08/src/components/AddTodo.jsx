import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form className="form-input" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Добавить"
        onChange={handleInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
