import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { CartContext } from "./context/ShoppingCartContext";
import { grey, yellow } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import SendOrder from "./SendOrder";

function Cart() {
  const [cart, setCart, removeCart] = useContext(CartContext);

  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  let iva = subTotal * 0.21;

  let precioTotal = subTotal + iva;

  const style = {
    gridContainer: {
      mt: "80px",
    },
    paper: {
      display: "flex",
      alignItems: "center",
      p: 2,
    },
    button: {
      bgcolor: yellow[700],
    },
  };

  return (
    <Grid
      sx={style.gridContainer}
      justifyContent={"center"}
      container
      spacing={3}
    >
      <Grid container component={Paper} mt={5} minHeight={600} mb={"5%"}>
        {cart.map((prod) => {
          return (
            <Grid key={prod.id} item xs={12} sx={style.paper}>
              <Grid item xs={2} md={2} display="flex" justifyContent={"center"}>
                <img src={prod.image} width="100px"></img>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography align="center" variant="h5">
                  {prod.title}
                </Typography>
              </Grid>
              <Grid item xs={2} md={2}>
                <Typography align="center" variant="h5">
                  Cant: {prod.quantity}
                </Typography>
              </Grid>
              <Grid item xs={2} md={2}>
                <Typography align="center" variant="h5">
                  $ {prod.price}
                </Typography>
              </Grid>
              <Grid item xs={2} md={2} display="flex" justifyContent={"center"}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeCart(prod.id)}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          );
        })}
        {cart.length >= 1 ? (
          <Grid container spacing={2} justifyContent="center">
            <Grid m={4} item xs={6}>
              <Divider color={"black"}></Divider>
              <Typography mt={1} variant="h6" color={"black"} align="center">
                SubTotal : $ {subTotal}
              </Typography>
              <Typography variant="h6" color={"black"} align="center">
                IVA(21%): {iva}
              </Typography>
              <Typography variant="h6" color={"black"} align="center">
                Precio Total: $ {precioTotal}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <SendOrder total={precioTotal} />
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            alignItems="center"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography mb={2} variant="h5" align="center">
              Tu carrito se encuentra vacio!
            </Typography>
            <Link to="/catalogo">
              <Button variant="contained" sx={style.button}>
                IR AL CATALOGO
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Cart;