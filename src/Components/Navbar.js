import CartWidget from './CartWidget'
function Navbar() {
  return (
    <>
    <h1>Bienvenido a Wishlist</h1>
    <nav>
        <a href='#'>Comprar</a>
        <a href='#'>Cuenta</a>
        <a href='#'>Contacto</a>
    </nav>
    <CartWidget/>
      
    </>
  );
}

export default Navbar