import { useState } from "react";
import Button from "./Button";


const ShopItem = ({item}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToogleFavorite = ()=>{
    if (isFavorite) {
      setIsFavorite(false);
      console.log(`${item.id}. Товар ${item.title} удалён из избранного`);
    } else{
      setIsFavorite(true);
      console.log(`${item.id}. Товар ${item.title} добавлен в избранное`);
    }
  }

  return(
    <div 
      style={{
        border: '1px solid #000',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <h3>
        {item?.title}
      </h3>
      <p>
        {item?.description}
      </p>
      <Button 
        onClick={handleToogleFavorite} 
        style={{width: '100%', backgroundColor: isFavorite?'red':'green'}}
      >
        {isFavorite? 'Удалить из избранного' : 'Добавить в избранное'}
      </Button>
    </div>
  )
}

export default ShopItem;