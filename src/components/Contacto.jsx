import { Box, Typography } from "@mui/material";
import Formulario from "./Formulario";

export default function Contacto() {

    return (
        <Box sx={{ mt:15 }}>
            <Typography 
                variant="h4" 
                component="h2" 
                align="center"
                sx={{ mb: 10 }}
            >
                Contacte con nosotros aquí!!
            </Typography>
            <Formulario />
        </Box>
    );
}