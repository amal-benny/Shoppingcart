import React, { createContext, useState } from 'react'; 
import {PRODUCTS} from "../products.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i=1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart()); 

  const addToCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1 }));
  };
  const removeFromCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const contextValue = {cartItems, addToCart, removeFromCart};


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};
