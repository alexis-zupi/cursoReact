import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemCardContainer from './components/ItemCardContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const [productos, setProductos] = useState([]);

  //axios libreria para hacer pedidos asincronicos, es mas rapida que fetch
  const obtenerProductos = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductos(data);
  }
 
 useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <Box>
      <NavBar />
      <ItemListContainer greeting='Esto es un mensaje!!' />
      <ItemCardContainer productos={productos} />
    </Box>
  )
}


export default App
