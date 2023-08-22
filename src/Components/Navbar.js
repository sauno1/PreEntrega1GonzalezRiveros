import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Route, Routes} from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
    <h1>Bienvenido a Wishlist</h1>
  <nav>
    <NavLink to="/category/:id">categoria 1</NavLink>
    <NavLink to="/item/:id">categorias 2</NavLink>
    <Routes>
       <Route path="/" element={<ItemListContainer/>}/>
       <Route path="/category/:id" element={<ItemListContainer/>}/>
       <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    <CartWidget/>
  </nav>
  
      
    </>
  );
}

export default Navbar