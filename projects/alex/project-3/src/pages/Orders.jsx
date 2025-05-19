


import { useContext, useEffect, useState } from "react";
import Card from "../components/Card"
import axios from "axios";
import AppContext from "../context";




function Orders () {
        const {onAddFavorite, onAddToCart} = useContext(AppContext);
        const [orders, setOrders] = useState([]);
        const [isLoading, setLoading] = useState(true)


        useEffect(() => {
          (async () => {
            const {data} = await axios.get('https://67dfc1f77635238f9aaa9bee.mockapi.io/orders');
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setLoading(false)
          })();
          
        }, []);

    return(
        <div className="content p-40 ">
          
            <div className="d-flex align-center justify-between mb-40">
            <h1>Мои заказы</h1>
              </div>
            <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((item, index)=>(
            <Card 
            key={index}
            onFavorite={(obj)=> onAddFavorite(obj)}
            onPlus={(obj)=> onAddToCart(obj)}
            loading={isLoading}
            {...item}/>
          )
          )}</div>

      </div>
    )
}

export default Orders ;