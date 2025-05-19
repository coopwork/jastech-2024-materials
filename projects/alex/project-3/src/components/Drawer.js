import { useState } from "react";
import Info from "./info";
import axios from "axios";
import { useCart } from "../hooks/useCart";

import drawerStyle from "./Style/Drawer.module.scss"

const delay = () => new Promise((resolve)=> setTimeout(resolve, 1000));

function Drawer({onClose, onRemove, items = [], opened }) {
  const {cartItems, setCartItems, totalPrice} = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false) 
  const [isLoading, setIsLoading] = useState(false) 
  
  const onClickOrder = async () => {
   
      setIsLoading(true);
      const { data } = await axios.post('https://67dfc1f77635238f9aaa9bee.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('/cart/' + item.id);
        await delay(1000);
      }

      
   
    setIsLoading(false);
  };

  return (
    <div className={`${drawerStyle.overlay} ${opened ? drawerStyle.overlayVisible : ''}`}>
      <div className={drawerStyle.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
  <div className="d-flex flex-column flex">
    <div className="items flex">
      {items.map((obj) => (
        
        <div key={obj.id} className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: `url(${obj.imageUrl})` }}
            className="cartItemImg"></div>

          <div className="mr-20 flex">
            <p className="mb-5">{obj.title}</p>
            <b>{obj.price || 0} тг.</b>
          </div>
          <img
            onClick={() => onRemove(obj.id)}
            className="removeBtn"
            src="img/btn-remove.svg"
            alt="Remove"
          />
        </div>
      ))}
    </div>
    <div className="cartTotalBlock">
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>{totalPrice} тг. </b>
        </li>
      </ul>
      <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
        Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
) : (
  <Info
    title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
    description={
      isOrderComplete
        ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
        : 'Добавьте товар, что бы сделать заказ.'
    }
    image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
  />
)}
      </div>
    </div>
  );
}

export default Drawer;
