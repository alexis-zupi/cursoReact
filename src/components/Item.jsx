import { CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { StyledButtonCard, StyledContainerCard } from "./StyledButtonCard"
import ShareIcon from '@mui/icons-material/Share'
import InfoIcon from '@mui/icons-material/Info'
import { Link } from "react-router-dom"

const Item = ({ id, image, title, category, price }) => {
    const style = {
        efectCard: {
            width: 350,
            background: '#cdd2ea',
            height: 520,
            marginTop: '15px',
            marginBottom: '15px'
        },
    }

    return (     
        <StyledContainerCard sx={style.efectCard} >
            <CardMedia 
                sx={{ height: 310, width: 350 }}
                image={image}
                title='descriptionImage'
            />
            <CardContent>
                <Typography sx={{ height: 90, fontWeight: 'bold' }} variant="subtitle1" component="h5">
                    {title}
                </Typography>
                <Typography sx={{ height: 30, fontStyle: 'italic' }} variant="subtitle2" component="span">
                    {category}
                </Typography>
            </CardContent>
            <Typography sx={{ height: 30, fontStyle: 'italic', marginLeft: 2 }} variant="subtitle2" component="span">
                ${price}
            </Typography>
            <CardActions sx={{ justifyContent: 'end', height: 60 }}>
                <StyledButtonCard
                    startIcon={<ShareIcon/>}
                >
                    Compartir
                </StyledButtonCard>
                <Link to={`/item/${id}`}>
                    <StyledButtonCard 
                        size="small"
                        startIcon={<InfoIcon/>}
                    >
                        Aprende mas
                    </StyledButtonCard> 
                </Link>
            </CardActions>
        </StyledContainerCard>    
    );
}


export default Item