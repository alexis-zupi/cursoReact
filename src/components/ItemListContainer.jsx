import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CategoryButton from "./CategoryButton"
import ItemList from "./ItemList"
import { StyleContainerCatalogo, StyledContainerProducts } from "./StyledComponents"

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
        <StyleContainerCatalogo> 
            <Box>
                <Link to={`/category/men's clothing`}>
                    <CategoryButton textoBtn='Hombre' />
                </Link>
                <Link to={`/category/women's clothing`}>
                    <CategoryButton textoBtn='Mujer' />
                </Link>
                <Link to={`/category/jewelery`}>
                    <CategoryButton textoBtn='Joyeria' />
                </Link>
                <Link to={`/category/electronics`}>
                    <CategoryButton textoBtn='Electronica' />
                </Link>
            </Box>
            <StyledContainerProducts>    
                {category ? <ItemList productos={FiltroProducto} /> : <ItemList productos={productos} />}  
            </StyledContainerProducts>  
        </StyleContainerCatalogo>
    );
}
