import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
 
 
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  


  return (
    <div>
      <input
        type={isVisible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль"
      />
      <button onClick={toggleVisibility}>
        {isVisible ? 'Скрыть' : 'Показать'}
      </button>
    </div>
  );
};

export default PasswordInput;
