import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function CartWidget() {
  const { itemCount } = useCart();

  return (
    <Link to="/carrito">
      <img src="/carrito-de-compras.png" alt="logocarrito" />
    </Link>
  );
}

export default CartWidget;
