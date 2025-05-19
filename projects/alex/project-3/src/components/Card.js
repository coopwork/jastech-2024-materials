import {useContext, useState } from 'react';
import cardStyles from './Style/Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../context';

function  Card ({id,
   onFavorite,
   title,
   imageUrl,
   price,
   onPlus,
   favorited = false, 
   loading = false
  }){

      const {isItemAdded} = useContext(AppContext)
      const [isFavorite, setFavorite] = useState(favorited)

       const onClickPlus =()=>{
        onPlus({id, title, imageUrl, price,});
       
       }

       const onClickFavotite = () => {
        onFavorite({id, title, imageUrl, price});
        setFavorite(!isFavorite)
       }
        

    return(
<div className={cardStyles.card}>
  {
    loading ?  <ContentLoader 
    speed={2}
    width={165}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="0" y="0" rx="11" ry="11" width="155" height="155" /> 
    <rect x="0" y="170" rx="0" ry="0" width="155" height="15" /> 
    <rect x="0" y="194" rx="0" ry="0" width="100" height="15" /> 
    <rect x="0" y="234" rx="0" ry="0" width="80" height="24" /> 
    <rect x="124" y="230" rx="11" ry="11" width="32" height="32" />
  </ContentLoader> : 
  <>
  <div className={cardStyles.favorite} onClick={onClickFavotite}>
  <img  src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked"/>
  </div>
  <img className={cardStyles.imgWatch} width={90} height={135} src={imageUrl} alt="sneakers"/>
  <h5>{title}</h5>
  <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} тг.</b>
      </div>
      { onPlus && <img className={cardStyles.plus}
      onClick={onClickPlus} 
      src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt=""
      />}
      </div>
      </>
  }
          
        </div>
    );
}

export default Card;