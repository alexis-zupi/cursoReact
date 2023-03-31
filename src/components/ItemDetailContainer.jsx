import axios from "axios";
import { useEffect, useState } from "react";
import ItemListDetail from "./ItemListDetail";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  const obtenerProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(() => {
      obtenerProductos();
  }, []);

  return (
    <ItemListDetail productos={products} />
  )
}
