import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BoxItemDetail, Img } from "./StyledComponents";

export default function ItemDetail({ id, image, title, category, price, description }) {
    return ( 
        <BoxItemDetail>      
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Img alt="complex" src={image}/>
                </Grid>                 
                <Grid item xs={6} container direction="column" spacing={2}>
                    <Grid item>
                        <Typography gutterBottom variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h5" component="span">
                            {category}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            ID: {id}
                        </Typography>
                        <Typography variant="h3" component="div">
                            ${price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary">
                            AddCart
                        </Button>
                    </Grid>                
                </Grid>
                <Grid item>
                    <Typography variant="h6" component="h5">
                        Descripcion
                    </Typography>
                    <Typography variant="h6" component="span">
                        {description}
                    </Typography>
                </Grid>                            
            </Grid> 
        </BoxItemDetail> 
    )
}
