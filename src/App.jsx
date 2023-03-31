import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route 
            path='/'
            element={<Navigate to={'home'}/>}
          />
          <Route 
            path="/home"
            element={<Home/>}
          />
          <Route 
            path="/catalogo"
            element={<ItemListContainer/>}
          />
          <Route 
            path='/category/:category'
            element={<ItemListContainer/>}
          />
          <Route 
            path="/register"
            element={<Register/>}
          />
          <Route 
            path='/item/:id'
            element={ <ItemDetailContainer/> }
          />
          <Route 
            path='*'
            element={<h2>Error 404</h2>}
          />
        </Routes>
      </Container>
    </>
  );
}
