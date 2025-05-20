import React from 'react';
// import categoriesJSON from '../assets/categories.json'; 
import { useTranslation } from "react-i18next";
function Categories({value, onChangeCategory}) {
 
  const { t} = useTranslation();
 const categories = [t("all"), t("meat"), t("vegetarian"), t("grilled"), t("spicy"), t("closed")]

 
  
  return (              
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li  
            key={i} 
            onClick={() => onChangeCategory(i)} 
            className={value === i ? 'active' : ''} >
            {categoryName} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
