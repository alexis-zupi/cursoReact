import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material"

const CartWidget = () => {
  return (
    <Button 
      variant="contained"
      size="large"
      startIcon={ <AddShoppingCartIcon/> }
    >
      3
    </Button>  
  );
}

export default CartWidget