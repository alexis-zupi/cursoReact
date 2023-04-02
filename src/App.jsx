import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import FooterNavbar from "./components/FooterNavbar";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import Cart from "./components/Cart";

export default function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route 
            path='/'
            element={<Navigate to={'home'}/>}
          />
          <Route 
            path="/home"
            element={<Home />}
          />
          <Route 
            path="/catalogo"
            element={<ItemListContainer />}
          />
          <Route 
            path='/category/:category'
            element={<ItemListContainer />}
          />
          <Route 
            path='/item/:id'
            element={ <ItemDetailContainer /> }
          />
          <Route 
            path="/cart" 
            element={<Cart />} 
          />
          <Route 
            path="/contacto" 
            element={<Contacto />} />
          <Route 
            path='*'
            element={<h2>Error 404</h2>}
          />
        </Routes>
        <Footer />
        <FooterNavbar />
      </Container>
    </ShoppingCartProvider>
  );
}
