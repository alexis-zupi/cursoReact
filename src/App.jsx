import { Box } from '@mui/material';
import CartShop from './components/CartShop';
import ClickCounter from './components/ClickCounter';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  return (
    <Box>
      <NavBar />
      <ItemListContainer greeting='Esto es un mensaje!!' />
      <ClickCounter />
      <CartShop />
    </Box>
  )
}

export default App
