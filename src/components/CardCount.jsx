import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { CartContext } from "./context/ShoppingCartContext";
import { BoxCartCount } from "./StyledComponents";

export default function CardCount({ rating, id, title, price, image }) {
    const [count, setCount] = useState(1);
    const [cart, setCart] = useContext(CartContext);
  
    const handleIncrement = () => {
        if (count < rating) {
        setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    const handleAdd = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + count };
                    } else {
                        return item;
                    }
                });
            } else {
              return [...currItems, { id, quantity: count, price, title, image }];
            }
        });

        console.log(count);
        setCount(1);
    };

    const style = {
        boxCount: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }
    }

    return (
        <BoxCartCount>
            <Box sx={{ marginBottom: '20px', marginTop: '30px' }}>
                <Button 
                    variant="contained"  
                    color="inherit" 
                    onClick={handleDecrement}
                >
                    <HorizontalRuleIcon />
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleAdd}
                    startIcon={ <ShareIcon/> }
                >
                    Agregar al Carro: {count}
                </Button>
                <Button 
                    variant="contained"
                    color="inherit"  
                    onClick={handleIncrement}
                >
                    <AddIcon />
                </Button>
            </Box>
        </BoxCartCount>
    )
}
