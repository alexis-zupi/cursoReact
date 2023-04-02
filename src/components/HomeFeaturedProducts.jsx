import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import Item from "./Item";
import { StyledContainerProducts } from "./StyledComponents";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/firebase-config";

export default function HomeFeaturedProducts() {
    const [items, setItems] = useState([]);

    const itemsCollectionRef = collection(db, "items");
    const getItems = async () => {
        const itemsCollection = await getDocs(itemsCollectionRef);
        setItems(
            itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
    }

    useEffect(() => {
        getItems();
    }, []);

    const prods = items.slice(0, 5);

    return (
        <Grid
            container
            spacing={2}
            ml={0}
            justifyContent="center"
        >
            <Grid item xs={12}>
                <Typography
                    mt={10}
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