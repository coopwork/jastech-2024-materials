import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';

function App() {
  const [data, setData] = useState({
    items: [],
    cartItems: [],
    favorites: [],
  });
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get('https://67decbfe471aaaa74285a68a.mockapi.io/cart');
        const favoriteResponse = await axios.get('https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites');
        const itemsResponse = await axios.get('https://67decbfe471aaaa74285a68a.mockapi.io/items');
        
        setLoading(false);

        setData({
          items: itemsResponse.data,
          cartItems: cartResponse.data,
          favorites: favoriteResponse.data,
        });
      } catch (error) {
        alert('Ошибка при загрузке данных!');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    const isItemInCart = data.cartItems.find((item) => Number(item.id) === Number(obj.id));

    if (isItemInCart) {
      axios.delete(`https://67decbfe471aaaa74285a68a.mockapi.io/cart/${obj.id}`);
      setData((prevData) => ({
        ...prevData,
        cartItems: prevData.cartItems.filter((item) => Number(item.id) !== Number(obj.id)),
      }));
    } else {
      axios.post('https://67decbfe471aaaa74285a68a.mockapi.io/cart', obj);
      setData((prevData) => ({
        ...prevData,
        cartItems: [...prevData.cartItems, obj],
      }));
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://67decbfe471aaaa74285a68a.mockapi.io/cart/${id}`);
    setData((prevData) => ({
      ...prevData,
      cartItems: prevData.cartItems.filter((item) => item.id !== id),
    }));
  };

  const onAddFavorite = async (obj) => {
    try {
      if (data.favorites.find((favObj) => favObj.id === obj.id)) {
        await axios.delete(`https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites/${obj.id}`);
        setData((prevData) => ({
          ...prevData,
          favorites: prevData.favorites.filter((item) => item.id !== obj.id),
        }));
      } else {
        const { data: newFav } = await axios.post('https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites', obj);
        setData((prevData) => ({
          ...prevData,
          favorites: [...prevData.favorites, newFav],
        }));
      }
    } catch (error) {
      alert('Не удалось добавить в избранное!');
    }
  };

  const onChangeSerchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return data.cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items: data.items,
        cartItems: data.cartItems,
        favorites: data.favorites,
        isItemAdded,
        onAddFavorite,
        onAddToCart,
        setCartOpened,
        setData,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={data.cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={data.items}
                cartItems={data.cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSerchInput={onChangeSerchInput}
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
                isItemAdded={isItemAdded}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;



// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import Drawer from './components/Drawer';
// import Header from './components/Header';
// import Home from './pages/Home';
// import { Route } from 'react-router-dom';
// import Favorites from './pages/Favorites';
// import AppContext from './context';
// import Orders from './pages/Orders';



  


// function App() {
//   const [items, setItems] = useState([]) 
//   const [cartItems, setCartItems] = useState([]) 
//   const [favorites, setFavorites] = useState([]) 
//   const [searchValue, setSearchValue] = useState('') 
//   const [cartOpened, setCartOpened] = useState(false);
//   const [isLoading, setLoading] = useState(true)

// useEffect(()=>{
//   async function fetchData(){
//     const cartResponse = await  axios.get('https://67decbfe471aaaa74285a68a.mockapi.io/cart');
//     const favoriteResponse = await axios.get('https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites');
//     const itemsResponse = await axios.get('https://67decbfe471aaaa74285a68a.mockapi.io/items');

//     setLoading(false)

//     setCartItems(cartResponse.data);
//     setFavorites(favoriteResponse.data);
//     setItems(itemsResponse.data)
//   }
//   fetchData()
// }, []);

// const onAddToCart = (obj)=>{
//   if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
//     axios.delete(`https://67decbfe471aaaa74285a68a.mockapi.io/cart/${obj.id}`);
//     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
//   } else{
//   axios.post('https://67decbfe471aaaa74285a68a.mockapi.io/cart', obj);
//   setCartItems((prev) => [...prev, obj]);
//   }
// };

// const onRemoveItem = (id) =>{
//   axios.delete(`https://67decbfe471aaaa74285a68a.mockapi.io/cart/${id}`);
//   setCartItems((prev) => prev.filter((item) => item.id !== id))
  
// };

// const onAddFavorite= async (obj)=>{
//   try {
//   if  (favorites.find(favObj => favObj.id === obj.id)){

//     axios.delete(`https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites/${obj.id}`)
//       setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
//   }
//   else{
//   const {data} = await axios.post('https://67dfc1f77635238f9aaa9bee.mockapi.io/favorites', obj);
//   setFavorites((prev) => [...prev, data]);
// }
//   } catch(error){
// alert('Не удалось добавить в избранное!!!')
//   }
  
// };


// const onChangeSerchInput = (event) =>{
//   setSearchValue(event.target.value);
// };

// const isItemAdded = (id) =>{
//   return cartItems.some((obj)=> Number(obj.id === Number(id)));

// }


//   return (
//     <AppContext.Provider 
//     value={{
//     items, 
//     cartItems, 
//     favorites, 
//     isItemAdded, 
//     onAddFavorite,
//     onAddToCart, 
//     setCartOpened,
//     setCartItems}}>
//     <div className="wrapper clear">
    

//         <Drawer
//           items={cartItems}
//           onClose={() => setCartOpened(false)}
//           onRemove={onRemoveItem}
//           opened={cartOpened}
//         />

     
//      {/* onCloseCart={()=> setCardOpened(false)} */}
 
   
//     <Header onClickCart={()=> setCartOpened(true)} />
      
//       <Route path="/" exact>
//         <Home 
//         items={items} 
//         cartItems={cartItems}
//         searchValue={searchValue} 
//         setSearchValue={setSearchValue}
//         onChangeSerchInput={onChangeSerchInput}
//         onAddFavorite={onAddFavorite}
//         onAddToCart={onAddToCart}
//         isLoading={isLoading}
//         />
//       </Route>

//       <Route path="/favorites" exact>
//         <Favorites/>
//       </Route>

//       <Route path="/orders" exact>
//         <Orders/>
//       </Route>
     
//     </div>
//     </AppContext.Provider>
    
//   );
// }

// export default App;

