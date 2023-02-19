import { Box } from '@mui/material';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  return (
    <Box>
      <NavBar />
      <ItemListContainer greeting='Esto es un mensaje!!' />
    </Box>
  )
}

export default App
