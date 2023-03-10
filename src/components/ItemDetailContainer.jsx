import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const obtenerProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(() => {
      obtenerProductos();
  }, []);

  return (
    <ItemDetail productos={products} />
  )
}

export default ItemDetailContainer