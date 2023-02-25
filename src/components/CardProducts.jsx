import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const CardProducts = ( {producto} ) => {
  return (
    <Card
        sx={{ maxWidth: 345 }}
    >
        <CardMedia 
            sx={{ height: 310 }}
            image={producto.image}
            title='perro negro'
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {producto.title}
            </Typography>
            <Typography variant="h6" component="span">
                {producto.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small">Aprende mas</Button>
        </CardActions>
    </Card>
  )
}

export default CardProducts