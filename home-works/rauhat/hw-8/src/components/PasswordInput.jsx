import React, {useState} from "react";
import "./PasswordInput.css";

const PasswordInput = ({...props}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(() => {
		return props.type ? props.type != 'password' ? true : false : false
	});

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};
	return (
			<div>
				<input
						placeholder="Enter your password"
						{...props}
						type={isPasswordVisible ? "text" : "password"}
				/>
				<button onClick={togglePasswordVisibility}>
					{isPasswordVisible ? "Hide" : "Show"}
				</button>
			</div>
	);
};

export default PasswordInput;