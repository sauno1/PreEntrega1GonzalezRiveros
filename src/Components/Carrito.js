import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './styles.css';

function Carrito() {
  const { cart, resetCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({ nombre: '', telefono: '', direccion: '' });
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleCompraClick = () => {
    setCompraRealizada(true);
    resetCart();
  };

  const totalCompra = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  if (compraRealizada) {
    return (
      <div className="compra-finalizada">
        <h2>¡Gracias por tu compra!</h2>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <div className="productos-container">
        <h2>Carrito de compras</h2>
        {cart.map((product) => (
          <div key={product.id} className="producto-card">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Descripción: {product.description}</p>
          </div>
        ))}
      </div>
      <div className="info-container">
        <p>Monto total de la compra: ${totalCompra}</p>
        <div className="form-container">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={customerInfo.nombre} onChange={handleInputChange} />
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={customerInfo.telefono} onChange={handleInputChange} />
          <label>Dirección:</label>
          <input type="text" name="direccion" value={customerInfo.direccion} onChange={handleInputChange} />
        </div>
        <button className="comprar-button" onClick={handleCompraClick}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Carrito;










