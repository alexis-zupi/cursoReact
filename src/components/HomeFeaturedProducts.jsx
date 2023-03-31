import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import Item from "./Item";
import { StyledContainerProducts } from "./StyledComponents";

export default function HomeFeaturedProducts() {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductos(res.data);
    }
    
    useEffect(() => {
        obtenerProductos();
    }, []);

    const prods = productos.slice(0, 5);

    const style = {
        grid: {
          bgcolor: grey[50],
        },
      };

    return (
        <Grid
            container
            spacing={2}
            ml={0}
            sx={style.grid}
            justifyContent="center"
        >
            <Grid item xs={12}>
                <Typography
                    mb={7}
                    mt={5}
                    variant="h4"
                    color={"black"}
                    align="center"
                    fontWeight={"bold"}
                >
                    Productos Destacados
                </Typography>
            </Grid>
            <StyledContainerProducts>
                {prods.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                    />
                ))}
            </StyledContainerProducts>
        </Grid>
    )
}