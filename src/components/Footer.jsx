import { Grid, Typography } from "@mui/material";
import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PercentIcon from "@mui/icons-material/Percent";
import { GridContainerFooter } from "./StyledComponents";

function Footer() {
  return (
    <GridContainerFooter sx={{ mt: "50px" }} container spacing={2} minHeight={250}>
        <Grid
            item
            xs={3}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <CreditScoreIcon sx={{ fontSize: 70, color: "black" }} />
            <Typography
                sx={{ textTransform: "capitalize" }}
                variant="h6"
                color={"black"}
                mt={2}
                textAlign="center"
            >
                Paga con Tarjeta o en Efectivo
            </Typography>
            <Typography variant="body1" textAlign={"center"} color={"black"}>
                En DSJ tenés todos los medios de pago <br /> y 3 cuotas sin interés
                con tarjeta.
            </Typography>
        </Grid>
        <Grid
            item
            xs={3}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <LocalShippingIcon sx={{ fontSize: 70, color: "black" }} />
            <Typography
                sx={{ textTransform: "capitalize" }}
                variant="h6"
                color={"black"}
                mt={2}
                textAlign={"center"}
            >
                Entrega Gratis
            </Typography>
            <Typography variant="body1" textAlign={"center"} color={"black"}>
                CBA y Zona Centro en el día. <br /> Resto del país entre 2 y 10 días
            </Typography>
        </Grid>
        <Grid
            item
            xs={3}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <PercentIcon sx={{ fontSize: 70, color: "black" }} />
            <Typography
                sx={{ textTransform: "capitalize" }}
                variant="h6"
                color={"black"}
                mt={2}
                textAlign="center"
            >
                Ahorrá con Precios Mayoristas
            </Typography>
            <Typography variant="body1" textAlign={"center"} color={"black"}>
                Hacemos Descuentos por Volumen. <br />
                Compra por bulto y/o por unidad.
            </Typography>
        </Grid>
    </GridContainerFooter>
  );
}

export default Footer;