import React, {useState} from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import "./PasswordInput.css"

const ShowHidePassword = ({...props}) => {
    const [show, setShow] = useState(false)
    return (
        <div className="password-input-container">
            <label htmlFor="password" className="password-label">Password:</label>
            <div className="password-input-wrapper">
                <input className="password" placeholder="Enter your password" type={show ? 'text' : 'password'} {...props}/>
                <span className="password-toggle" onClick={() => setShow(!show)}>
                    {show ? (<FaEyeSlash/>) : (<FaEye/>)}
                </span>
            </div>
        </div>
    )
}
export default ShowHidePassword