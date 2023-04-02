import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { yellow } from "@mui/material/colors";
import { CartContext } from "./context/ShoppingCartContext";
import db from "../../db/firebase-config";

function SendOrder({ total }) {
  const [cart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [compra, setCompra] = useState(0);

  const ordersCollection = collection(db, "orden");

  const order = {
    buyer: {
      name,
      email,
    },
    items: cart,
    total: {"$": total },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const style = {
    button: {
      mt: 2,
      bgcolor: yellow[700],
      display: 'flex',
      mx: "auto",
    },
  };

  return (
    <Grid item component={"form"} onSubmit={handleSubmit}>
      <TextField
        label="Nombre y Apellido"
        variant="outlined"
        fullWidth
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <Button
        sx={style.button}
        type="submit"
        onClick={(e) => setCompra(1)}
        variant="contained"
      >
        Enviar Informacion
      </Button>
      <Typography mt={3} mb={2} textAlign="center" fontWeight={"bold"}>
        Id de la orden: {orderId}
      </Typography>
      {compra >= 1 ? (
        <Typography
          mt={2}
          mb={2}
          fontSize={20}
          textAlign="center"
          fontWeight={"bold"}
        >
          Felicidades {order.buyer.name}, <br /> Su compra se realizo con exito!{" "}
          <br />
          Nos comunicaremos pronto para mas detalles.
        </Typography>
      ) : (
        ""
      )}
    </Grid>
  );
}

export default SendOrder;
