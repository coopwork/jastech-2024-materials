import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <input
        type={isPasswordVisible ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <button onClick={togglePasswordVisibility}>
        {isPasswordVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
