// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children, cart: initialCart }) {
  const [cart, setCart] = useState(initialCart);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (product) => {
    // Generamos un identificador único para cada producto
    const cartItemId = product.id + product.quantity;

    // Verificamos si el producto ya existe en el carrito
    const existingProductIndex = cart.findIndex((p) => p.cartItemId === cartItemId);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, cartItemId }]);
    }
  };

  const resetCart = () => {
    setCart([]);
    setItemCount(0); // Reinicia el contador del carrito
  };

  useEffect(() => {
    const itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    setItemCount(itemCount);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}







