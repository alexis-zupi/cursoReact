import { CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { StyledButtonCard, StyledContainerCard } from "./StyledButtonCard"
import ShareIcon from '@mui/icons-material/Share'
import { useParams } from "react-router-dom"
import CardCount from "./CardCount"

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    
    const style = {
        efectCard: {
            width: 350,
            background: '#cdd2ea',
            margin: '15px 0 50px 100px',
        },
    }
    
    const productoFilter = productos.filter((prod) => prod.id == id);
    console.log(productoFilter);

    return (
        <>
            {productoFilter.map((prod) => (
                <StyledContainerCard sx={style.efectCard} key={prod.id}>
                    <CardMedia 
                        sx={{ height: 310, width: 350 }}
                        image={prod.image}
                        title='descriptionImage'
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="h5">
                            {prod.title}
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant="subtitle2" component="span">
                            {prod.category}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography sx={{ fontStyle: 'italic', marginLeft: 3, marginRight: 3 }} variant="h6" component="span">
                            ${prod.description}
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic', marginLeft: 2 }} variant="subtitle2" component="span">
                            ${prod.price}
                        </Typography>
                    </CardContent>
                    <CardCount />
                </StyledContainerCard>       
            ))}
        </>
    )
}

export default ItemDetail