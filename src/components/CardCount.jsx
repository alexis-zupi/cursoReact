import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";

export default function CardCount({ min, rating }) {
    const [count, setCount] = useState(1);
    
    min = 1;
  
    const handleIncrement = () => {
        if (count < rating) {
        setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > min) {
        setCount(count - 1);
        }
    };

    const handleAdd = () => {
        console.log(count);
        setCount(min);
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
        <Box sx={style.boxCount} >
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
        </Box>
    )
}
