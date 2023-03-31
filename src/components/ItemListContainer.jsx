import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { StyledContainerProducts } from "./StyledComponents"

export default function ItemListContainer()  { 
    const [productos, setProductos] = useState([]);
    const { category } = useParams();
    
    const obtenerProductos = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductos(res.data);
    }
    
    useEffect(() => {
        obtenerProductos();
    }, []);
    
    const FiltroProducto = category
    ? productos.filter((prod) => prod.category === category)
    : productos;

    return (
        <StyledContainerProducts>    
            {category ? <ItemList productos={FiltroProducto} /> : <ItemList productos={productos} />}  
        </StyledContainerProducts> 
    );
}
