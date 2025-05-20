import React from "react";
import styles from "./search.module.scss";
import { SearchContext } from "../../App";
import { useTranslation } from "react-i18next";
import searchSvg from "../../assets/img/search_icon.svg";
import clearSvg from "../../assets/img/clear.svg";
const Search = () => {
   const { t } = useTranslation();
   const { searchValue, setSearchValue } = React.useContext(SearchContext);

   return (
      <div className={styles.root}>
         <img className={styles.icon} src={searchSvg} alt="" />
         <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={styles.input}
            placeholder={t("search")}
         />
         {searchValue && (
            <img
               onClick={() => setSearchValue("")}
               className={styles.clearIcon}
               src={clearSvg}
               alt=""
            />
         )}
      </div>
   );
};

export default Search;
