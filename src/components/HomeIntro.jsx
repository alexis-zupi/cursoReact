import { Alert, Box, Button, Collapse, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomeIntro() {
    const [open, setOpen] = useState(true);

    return (
        <Box sx={{ textAlign: "center", bgcolor: "gray", height: "935px" }}>
            <Stack>
                <Collapse in={open} sx={{ mt: 8 }}>
                    <Alert 
                        severity="warning"
                        onClose={() => setOpen(false)}  
                        color="warning"
                    >
                        Advertencia, esta pagina es fecticia!! No se pueden realizar compras en la misma.
                    </Alert>
                </Collapse>
            </Stack>
            <Typography variant="h3" component="h1" sx={{ pt: 10 }}>Bienvenidos a ShoppZupp</Typography>
            <Box sx={{ display: "flex", mx: "auto", mt: 15, width: "80%" }}>
                <Box sx={{ width: "100%" }}>
                    <img 
                        src="https://www.ecommercenews.pe/wp-content/uploads/2020/09/productos-ventas-online.jpg" 
                        alt="Esta es la imagen"
                        width="90%"
                    />
                </Box>
                <Box sx={{ alignSelf: "center", width: "100%" }}>
                    <p>¡Bienvenido a nuestra página de ventas de productos! Si estás buscando productos de alta calidad y a precios competitivos, has venido al lugar correcto. Estamos comprometidos con la satisfacción del cliente y esperamos que disfrutes de tu experiencia de compra en nuestra tienda en línea. ¡Gracias por visitarnos!</p>
                    <NavLink 
                        to="/catalogo"
                        style={{ textDecoration:"none" }}
                    >
                        <Button 
                            variant="contained" 
                            sx={{ mt: 5 }}
                        >
                            Visita nuestra tienda!
                        </Button>
                    </NavLink>
                </Box>
            </Box> 
        </Box>
    )
}