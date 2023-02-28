import { Box, Grid } from "@mui/material"
import CardProducts from "./cardProducts"

const ItemCardContainer = ({ productos }) => { 
    const style = {
        boxContainer: {
            backgroundColor: '#ffcdd2',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }
    }


    return (
        <Grid container sx={{ marginTop: '40px', marginBottom: '40px' }}>
            <Grid item xs={0} sm={0} md={0} lg={1} xl={1}/>
            <Grid item xs={12} sm={12} md={12} lg={10} xl={10} sx={style.boxContainer}>      
                {productos.map((producto) => (
                <CardProducts key={producto.id} producto={producto} />
                ))}      
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={1} xl={1}/>
        </Grid>
    )
}

export default ItemCardContainer