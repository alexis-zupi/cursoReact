import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GridContainerFooterNavbar } from "./StyledComponents";

function FooterNavbar() {
  return (
    <GridContainerFooterNavbar container spacing={2}>
        <Grid
            item
            xs={2}
        >
            <Typography mt={3} mb={2} variant="h5" color={"black"}>
            Estamos Para Vos
            </Typography>
            <Link to="/">
                <Typography variant="h6" color={"black"}>Home</Typography>
            </Link>
            <Link to="/catalogo">
                <Typography variant="h6" color={"black"}>Catalogo</Typography>
            </Link>
            <Link to="/contacto">
                <Typography variant="h6" color={"black"}>Contacto</Typography>
            </Link>
        </Grid>
        <Grid
            item
            xs={2}
        >
            <Typography mt={3} mb={2} variant="h5" color={"black"}>
                Nuestras Categorias
            </Typography>
            <Link  to={`/category/men's clothing`}>
                <Typography variant="h6" color={"black"}>Hombre</Typography>
            </Link>
            <Link  to={`/category/women's clothing`}>
                <Typography variant="h6" color={"black"}>Mujer</Typography>
            </Link>
            <Link to={`/category/jewelery`}>
                <Typography variant="h6" color={"black"}>Joyeria</Typography>
            </Link>
            <Link to={`/category/electronics`}>
                <Typography variant="h6" color={"black"}>Electronica</Typography>
            </Link>
        </Grid>
        <Grid
            item
            xs={2}
        >
            <Typography mt={3} mb={2} variant="h5" textAlign={"center"} color={"black"}>
               Sobre nosotros
            </Typography>
            <Link to="/catalogo">
                <Typography variant="h6" color={"black"}>Productos</Typography>
            </Link>
            <Link to="/contacto">
                <Typography variant="h6" color={"black"}>Contacto</Typography>
            </Link>
        </Grid>
        <Grid
            item
            xs={2}
        >
            <Typography mt={3} mb={2} variant="h5" color={"black"}>
                Atencion al Cliente
            </Typography>
                <Typography variant="h6" color={"black"}>tel:3406 564123</Typography>  
                <Typography variant="h6" color={"black"}>tel:3405 641216</Typography>
                <Typography variant="h6" color={"black"}>tel:2450 654054</Typography>     
        </Grid>
    </GridContainerFooterNavbar>
  );
}

export default FooterNavbar;