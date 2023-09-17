import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../CartContext";
import "./styles.css";

function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src="/logo2.png" alt="Logo" /></Link>
      </div>
      <div className="navbar-center">
        <Link to="/category/hombre" className="navbar-link">
          <span className="navbar-text">Para él</span>
        </Link>
        <Link to="/category/mujer" className="navbar-link">
          <span className="navbar-text">Para ella</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/carrito" className="navbar-link">
          <CartWidget />
        </Link>
        <p className="navbar-item-count">{itemCount}</p>
      </div>
    </nav>
  );
}

export default Navbar;

