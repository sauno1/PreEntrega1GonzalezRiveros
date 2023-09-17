import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Components/styles.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Carrito from './Components/Carrito';
import Footer from './Components/Footer';
import { CartProvider } from './CartContext';
import LoadingSpinner from './Components/LoadingSpinner';

function App() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <CartProvider cart={cart}>
      <BrowserRouter>
        
          <Navbar />
          <div className="page-container">
          <Routes>
            <Route path="/" element={<ItemListContainer addToCart={addToCart} onLoadingComplete={handleLoadingComplete} />} />
            <Route path="/category/:category" element={<ItemListContainer addToCart={addToCart} onLoadingComplete={handleLoadingComplete} />} />
            <Route path="/item/:id" element={<ItemDetailContainer onLoadingComplete={handleLoadingComplete} />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h1>Error 404 page not found</h1>} />
          </Routes>
          {loading ? <LoadingSpinner /> : null}
          </div>
          <Footer />
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;










