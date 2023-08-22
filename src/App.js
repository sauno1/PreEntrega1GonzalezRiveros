import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <ItemListContainer greeting="Todo lo que necesitas en un solo lugar"/>
    <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;