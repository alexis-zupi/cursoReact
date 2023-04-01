import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';

export default function CartWidget() {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <Button 
            variant="contained"
            size="large"
            startIcon={ <AddShoppingCartIcon/> }
        >
            {quantity}
        </Button>
    )
}