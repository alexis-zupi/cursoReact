import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";

export default function CartWidget() {
    return (
        <Button 
            variant="contained"
            size="large"
            startIcon={ <AddShoppingCartIcon/> }
        >
            3
        </Button>
    )
}