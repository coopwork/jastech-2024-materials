import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    
        <p>&copy; {new Date().getFullYear()} Финальный проект DamZh87</p>
    
    </footer>
  );
};

export default Footer;