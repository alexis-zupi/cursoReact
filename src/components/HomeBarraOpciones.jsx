import { Box } from "@mui/system";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { Link } from "react-router-dom";
import { BoxHomeBarraOpciones } from "./StyledComponents";

function HomeBarraOpciones() {
  return (
    <BoxHomeBarraOpciones>
      <Box sx={{ ml: 5 }}>
        <Link to="https://www.andreani.com/#!/personas" target={"_blank"}>
          <Button>
            <LocalShippingIcon sx={{ fontSize: 70, color: "black" }} />
            <Typography
              sx={{ ml: 3, textTransform: "capitalize" }}
              component={"span"}
              color={"black"}
            >
              Envios <br /> todo sobre nuestros envios <br /> Haz click aqui
            </Typography>
          </Button>
        </Link>
      </Box>
      <Box sx={{ ml: 5 }}>
        <Link to="/catalogo">
        <Button>
          <InventoryIcon sx={{ fontSize: 70, color: "black" }} />
          <Typography
            sx={{ ml: 3, textTransform: "capitalize" }}
            component={"span"}
            color={"black"}
          >
            Productos <br /> Realiza tu pedido ahora <br /> Haz click aqui
          </Typography>
        </Button>
        </Link>
      </Box>
      <Box sx={{ ml: 5 }}>
        <Link to="/contacto">
        <Button>
          <AttachEmailIcon sx={{ fontSize: 70, color: "black" }} />
          <Typography
            sx={{ ml: 3, textTransform: "capitalize" }}
            component={"span"}
            color={"black"}
          >
            Contacto <br /> Contacta a nuestros vendedores <br /> Haz click aqui
          </Typography>
        </Button>
        </Link>
      </Box>
    </BoxHomeBarraOpciones>
  );
}

export default HomeBarraOpciones;