import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext, ThemeContext } from "../App";
import logoSvg from "../assets/img/pizza-logo.svg";
import cartSvg from "../assets/img/cart.svg";
import Search from "./Search";
import { useTranslation } from "react-i18next";

function Header() {
   const { cartItems } = useContext(CartContext);
   const { theme, toggleTheme } = useContext(ThemeContext);
   const location = useLocation();
   const { t, i18n } = useTranslation();
   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
   const totalCount = cartItems.length;

   return (
      <div className="header">
         <div className="container">
            <Link to="/">
               <div className="header__logo">
                  <img width="38" src={logoSvg} alt="Pizza logo" />
                  <div>
                     <h1>{t("pizza")}</h1>
                     <p>{t("description")}</p>
                  </div>
               </div>
            </Link>
            

      {location.pathname === "/" && <Search />}
    

            <div className="header__cart__switch">
               <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "light" ? "🌙" : "☀️"}
               </button>

               <div className="language-switcher">
                  <select
                     onChange={(e) => i18n.changeLanguage(e.target.value)}
                     value={i18n.language}
                  >
                     <option value="kk">Қазақша</option>
                     <option value="en">Русский</option>
                  </select>
               </div>

               <div className="header__cart">
                  <Link to="/cart" className="button button--cart">
                     <span>{totalPrice} ₸</span>
                     <div className="button__delimiter"></div>
                     <img className="cart__img" src={cartSvg} alt="" />
                     <span>{totalCount}</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
