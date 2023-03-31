import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

function FooterNavbar() {
  const style = {
    grid: {
        bgcolor: yellow[700],
      display: "flex",
      justifyContent: "center"
    },
  };

  return (
    <Grid container spacing={2} sx={style.grid}>
        <Grid
            item
            xs={2}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"start"}
            mb={5}
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
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            mb={5}
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
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"start"}
            mb={5}
        >
            <Typography mt={3} mb={2} variant="h5" textAlign={"center"} color={"black"}>
               Sobre nosotros
            </Typography>
            <Link to="/catalogo">
                <Typography variant="h6" color={"black"}>Nosotros</Typography>
            </Link>
            <Link to="/contacto">
                <Typography variant="h6" color={"black"}>Contacto</Typography>
            </Link>
        </Grid>
        <Grid
            item
            xs={2}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"start"}
            mb={5}
        >
            <Typography mt={3} mb={2} variant="h5" color={"black"}>
                Nuestras Marcas
            </Typography>
            <Link to="http://www.galletitastrio.com.ar/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Trio</Typography>
            </Link>
            <Link to="https://www.felfort.com.ar/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Felfort</Typography>
            </Link>
            <Link to="https://bodegaetnia.com/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Etnia</Typography>
            </Link>
            <Link to="https://dos-hermanos.com/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Dos Hermanos</Typography>
            </Link>
            <Link to="https://www.riskydit.com.ar/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Risky-D</Typography>
            </Link>
            <Link to="http://alfajoresvimar.com/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Vimar</Typography>
            </Link>
            <Link to="https://www.arcor.com/ar/" target={"_blank"}>
                <Typography variant="h6" color={"black"}>Misky</Typography>
            </Link>
        </Grid>
    </Grid>
  );
}

export default FooterNavbar;