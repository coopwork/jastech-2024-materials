import React, {useEffect} from 'react';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import {Routes, Route} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import Footer from './components/Footer/';

export const SearchContext = React.createContext ();
export const CartContext = React.createContext ();
export const ThemeContext = React.createContext ();

function App () {
  const [searchValue, setSearchValue] = React.useState ('');
  const [cartItems, setCartItems] = React.useState ([]);
  const [theme, setTheme] = React.useState (() => {
    return localStorage.getItem ('theme') || 'light';
  });

  useEffect (
    () => {
      document.body.setAttribute ('data-theme', theme);
      localStorage.setItem ('theme', theme);
    },
    [theme]
  );

  const toggleTheme = () => {
    setTheme (prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const addToCart = pizza => {
    setCartItems (prev => [...prev, pizza]);
  };

  const removeFromCart = index => {
    setCartItems (prev => prev.filter ((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems ([]);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <CartContext.Provider
          value={{cartItems, addToCart, removeFromCart, clearCart}}
        >
          <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <div className={`wrapper ${theme}`}>
              <Header />
              <div className="content">

                <Routes>
                  <Route
                    path="/"
                    element={<Home searchValue={searchValue} />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                
              </div>
              <Footer />
            </div>
          </SearchContext.Provider>
        </CartContext.Provider>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
