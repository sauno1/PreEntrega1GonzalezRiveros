import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../CartContext';
import './styles.css'; // Importa el archivo CSS adecuado

function ItemDetailContainer({ onLoadingComplete }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
        onLoadingComplete();
      }
    };

    fetchProduct();
  }, [id, onLoadingComplete]);

  const handleAddToCart = () => {
    if (product) {
      const productInCart = {
        ...product,
        quantity,
      };

      addToCart(productInCart);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="product-not-found">Producto no encontrado.</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h1>Detalle del Producto</h1>
        <h2>{product.title}</h2>
        <ul>
          <li>Precio: ${product.price}</li>
          <li>Detalle: {product.description}</li>
          <li>Stock: {product.stock} unidades</li>
        </ul>
        <div className="quantity-controls">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;











