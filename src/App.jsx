import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardProducts from './components/cardProducts';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [productos, setProductos] = useState([]);

  //axios libreria para hacer pedidos asincronicos, es mas rapida que fetch
  const obtenerProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  }

  useEffect(() => {
    obtenerProductos();
  }, [])
  

  return (
    <Box>
      <NavBar />
      <ItemListContainer greeting='Esto es un mensaje!!' />
      <Box>
        {productos.map((producto) => (
          <CardProducts key={producto.id} producto={producto} />
        ))}
      </Box>
    </Box>
  )
}

export default App
