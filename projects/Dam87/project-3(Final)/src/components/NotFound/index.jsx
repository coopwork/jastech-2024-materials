import react from "react";
import styles from './NotFoundBlock.module.scss'
import { useTranslation } from "react-i18next";
export const NotFoundBlock = () => {
     const { t, i18n } = useTranslation();
    return(
    <div>
    <h1 className={styles.root}> 404</h1>

    <p className={styles.description}>
       {t("page_not_found")}
    </p>

    </div>
    )
}

export default NotFoundBlock;