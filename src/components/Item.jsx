import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { StyledButtonCard, StyledCard } from "./StyledComponents";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function Item({ id, image, title, category, price }) 
    {return (     
        <StyledCard>
            <CardMedia 
                image={image}
                title='descriptionImage'
            />
            <CardContent>
                <Typography variant="subtitle1" component="h5">
                    {title}
                </Typography>
                <Box>
                    <Typography variant="subtitle2" component="span">
                        {category}
                    </Typography>
                    <Typography variant="h6" component="span">
                        ${price}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Link to={`/item/${id}`}>
                    <StyledButtonCard 
                        size="small"
                        startIcon={<InfoIcon/>}
                    >
                        Aprende mas
                    </StyledButtonCard> 
                </Link>
            </CardActions>
        </StyledCard>    
    );
}
