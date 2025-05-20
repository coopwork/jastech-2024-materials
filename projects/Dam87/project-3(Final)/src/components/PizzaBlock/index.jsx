import React, { useContext } from "react";
import { CartContext } from "../../App";
import { useTranslation } from "react-i18next";
function PizzaBlock({ id, title, price, imageUrl, types, sizes }) {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: activeType,
      size: sizes[activeSize],
    };
    addToCart(item);
  };
  const { t} = useTranslation();
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId, index) => (
              <li
                key={`type_${index}`}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
              >
                {[t("thin"), t("traditional")][typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={`size_${i}`}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price}₸</div>
          <button className="button button--outline button--add" onClick={handleAddToCart}>
            <span>{t("add_to_cart")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
