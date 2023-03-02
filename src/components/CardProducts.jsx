import { CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { StyledButtonCard, StyledConainerCard } from "./StyledButtonCard"
import ShareIcon from '@mui/icons-material/Share'
import InfoIcon from '@mui/icons-material/Info'

const CardProducts = ({ producto }) => {

    
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
        <StyledConainerCard sx={style.efectCard} >
            <CardMedia 
                sx={{ height: 310, width: 350 }}
                image={producto.image}
                title='descriptionImage'
            />
            <CardContent>
                <Typography sx={{ height: 100, fontWeight: 'bold' }} variant="subtitle1" component="h5">
                    {producto.title}
                </Typography>
                <Typography sx={{ height: 50, fontStyle: 'italic' }} variant="subtitle2" component="span">
                    {producto.category}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end', height: 60 }}>
                <StyledButtonCard
                    startIcon={<ShareIcon/>}
                >
                    Compartir
                </StyledButtonCard>
                <StyledButtonCard 
                    size="small"
                    startIcon={<InfoIcon/>}
                >
                    Aprende mas
                </StyledButtonCard> 
            </CardActions>
        </StyledConainerCard>
    )
}


export default CardProducts