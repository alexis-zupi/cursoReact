import { Grid, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
import CustomButton from "./CustomButton"

const NavBar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  };

  const style = {
    boxNavbar: {
      backgroundColor: '#ffcdd2',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 3,
      width:'100%',
    },
    tituloNavbar: {
      color: '#0277bd',
      span: {
        color: 'red',
        fontSize: 32,
        fontWeight: 'bold',
      }
    },
    cart: {
      display: 'flex',
      justifyContent: 'end'
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 1,
    },
  }

  return (
    <Grid container sx={style.boxNavbar}>
        <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
          <NavLink
            to='/'
            style={{ textDecoration: 'none' }}
          >
            <Typography sx={style.tituloNavbar} variant='h4'>Shop<Typography component="span">Zupi</Typography></Typography>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={7} md={8} lg={8} xl={8} sx={style.containerButton}>
          <NavLink 
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <CustomButton textoBtn='Home' mensaje="hola estas en la seccion de Inicio" />
          </NavLink>
          <NavLink
            to='productos'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <CustomButton textoBtn='Productos' mensaje="hola estas en la seccion de Producto" />
          </NavLink>
          <CustomButton textoBtn='Ofertas' mensaje="hola estas en la seccion de Ofertas" />
          <CustomButton textoBtn='Sucursales' mensaje="hola estas en la seccion de Catalogo" />
          <CustomButton textoBtn='Contactos' mensaje="hola estas en la seccion de Contactos" />
        </Grid>
        <Grid item sx={style.cart} xs={3} sm={2} md={2} lg={2} xl={2}>
          <CartWidget />
        </Grid>
    </Grid>  
  )
}

export default NavBar