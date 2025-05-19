import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { useTranslation } from "react-i18next";

const Cart = () => {
   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
   const totalCount = cartItems.length;
   const { t, i18n } = useTranslation();
   return (
      <div className="container container--cart">
         <div className="cart">
            <div className="cart__top">
               <h2 className="content__title">{t("cart")}</h2>
               {cartItems.length > 0 && (
                  <button
                     className="button button--outline button--small"
                     onClick={clearCart}
                  >
                     {t("clear_cart")}
                  </button>
               )}
            </div>
            <div className="content__items">
               {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                     <div className="cart__item" key={index}>
                        <div className="cart__item-img">
                           <img
                              className="pizza-block__image"
                              src={item.imageUrl}
                              alt={item.title}
                           />
                        </div>
                        <div className="cart__item-info">
                           <h3>{item.title}</h3>
                           <p>
                              {[t("thin"), t("traditional")][item.type]},{" "}
                              {item.size} см.
                           </p>
                        </div>
                        <div className="cart__item-price">
                           <b>{item.price} ₸</b>
                        </div>
                        <button
                           className="button button--outline button--circle"
                           onClick={() => removeFromCart(index)}
                        >
                           ✕
                        </button>
                     </div>
                  ))
               ) : (
                  <p>{t("cart_is_empty")}</p>
               )}
            </div>
            <div className="cart__bottom">
               <div className="cart__bottom-details">
                  <span>
                     {" "}
                     {t("total")}:{" "}
                     <b>
                        {totalCount} {t("qantity")}
                     </b>
                  </span>
                  <span>
                     {t("sum")}: <b>{totalPrice} ₸</b>
                  </span>
               </div>
               <div className="cart__bottom-buttons">
                  <Link
                     to="/"
                     className="button button--outline button--add go-back-btn"
                  >
                     <span>{t("back")}</span>
                  </Link>
                  <div className="button pay-btn">
                     <span>{t("pay")}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
