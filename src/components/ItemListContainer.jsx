import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CategoryButton from "./CategoryButton"
import ItemList from "./ItemList"

const ItemListContainer = () => { 
    const [productos, setProductos] = useState([]);
    const { category } = useParams();
    
    const style = {
        boxContainer: {
            backgroundColor: '#ffcdd2',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        }
    }

    //axios libreria para hacer pedidos asincronicos, es mas rapida que fetch
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
        <Grid container sx={{ marginTop: '40px', paddingBottom: '40px' }}>
            <Grid item xs={0} sm={0} md={0} lg={1} xl={1}/>
            <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>   
                <Box sx={{ marginBottom: '20px' }}>
                    <Link to={`/category/men's clothing`} >
                        <CategoryButton textoBtn='Hombre' />
                    </Link>
                    <Link to={`/category/women's clothing`} >
                        <CategoryButton textoBtn='Mujer' />
                    </Link>
                    <Link to={`/category/jewelery`} >
                        <CategoryButton textoBtn='Joyeria' />
                    </Link>
                    <Link to={`/category/electronics`} >
                        <CategoryButton textoBtn='Electronica' />
                    </Link>
                </Box>
                <Box sx={style.boxContainer}>    
                    {category ? <ItemList productos={FiltroProducto} /> : <ItemList productos={productos} />}  
                </Box>  
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={1} xl={1}/>
        </Grid>
    )
}

export default ItemListContainer