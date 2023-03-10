import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const CardCount = ({ iniciacion, min, max }) => {
    iniciacion = 1;
    min = 0;
    max = 10;

    const [count, setCount] = useState(iniciacion);
  
    const handleIncrement = () => {
        if (count < max) {
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
        setCount(0);
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
                    onClick={handleIncrement}
                >
                    +
                </Button>
                <Typography 
                    sx={{ fontWeight: 'bold', margin: '30px' }} 
                    variant="subtitle1" 
                    component="span"
                >
                    {count}
                </Typography>
                <Button 
                    variant="contained"  
                    onClick={handleDecrement}
                >
                    -
                </Button>
            </Box>
            <Button 
                sx={{ marginBottom: '20px' }}
                variant="contained"
                color="success"
                onClick={handleAdd}
            >
                Agregar al Carro
            </Button>
        </Box>
    )
}

export default CardCount