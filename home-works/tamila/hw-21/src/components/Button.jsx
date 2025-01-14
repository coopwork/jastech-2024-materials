import styles from './button.module.css';

const Button = ({children, icon, isLoading, ...props}) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading} 
      className={styles.myButton}
    >
      {isLoading && <span className={styles.buttonLoader}/>}
      {icon}
      {children}
    </button> 
  )
}

export default Button;