import Button from "./Button"
import styles from './paswordinput.module.css';
import { useState } from "react";
const PasswordInput = () => {
    const [isShow, setIsShow] = useState(false);
  
const handleToogleShow = ()=>{
    if (isShow) {
      setIsShow(false);
       } else{
        setIsShow(true);
    }
  }
  return(
    <div className={styles.container}>
        <input className={styles.pass_input} type={isShow? "text" : "password"} >
            </input>  

        <Button
            onClick={handleToogleShow} 
            
        >
            {isShow? 'Скрыть пароль' : 'Показать пароль'}
        </Button>

    </div>
    )
  }

  export default PasswordInput;