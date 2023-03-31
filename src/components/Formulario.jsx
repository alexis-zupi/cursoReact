import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"

export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    {/*
    const [error, setError] = useState({
        error: false,
        message: ""
    })    
    */}

    const [leyendaNombre, setLeyendaNombre] = useState("");
    const [leyendaApellido, setLeyendaApellido] = useState("");
    const [leyendaEmail, setLeyendaEmail] = useState("");
    const [leyendaTel, setLeyendaTel] = useState("");

    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorTel, setErrorTel] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre}\nEmail: ${email}\nTelefono: ${telefono}`);
        {/*if (validateEmail(email)) {
            setError({
                error: false,
                message: ""
            });
            console.log("Email correcto");
        } else {
            setError({
                error: true,
                message: "Formato de email incorrecto"
            }); 
        }*/}
    }; 

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
        >
            <TextField 
                sx={{ mb: 3 }}
                id="nombre"
                label="Nombre"
                type="text"
                variant="outlined"
                value={nombre}
                onChange={(e) =>{ 
                    setNombre(e.target.value)
                    if (nombre.length > 20) {
                        setErrorNombre(true);
                        setLeyendaNombre("el nombre contiene mas de 20 caracteres")
                    } else {
                        setErrorNombre(false);
                        setLeyendaNombre("")
                    }
                }}
                error={errorNombre}
                helperText={leyendaNombre}
                required
                fullWidth
            />
            <TextField 
                sx={{ mb: 3 }}
                id="apellido"
                label="Apellido"
                type="text"
                variant="outlined"
                value={apellido}
                onChange={(e) => {
                    setApellido(e.target.value)
                    if (apellido.length > 20) {
                        setErrorApellido(true);
                        setLeyendaApellido("el apellido contiene mas de 20 caracteres")
                    } else {
                        setErrorApellido(false);
                        setLeyendaApellido("")
                    }
                }}
                error={errorApellido}
                helperText={leyendaApellido}
                required
                fullWidth
            />
            <TextField 
                sx={{ mb: 3 }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    if (validateEmail(email)) {
                        setErrorEmail(false);
                        setLeyendaEmail("")
                    } else {
                        setErrorEmail(true);
                        setLeyendaEmail("Debe ingresar un email valido")
                    }
                }}    
                error={errorEmail}
                helperText={leyendaEmail}
                required
                fullWidth
            />
            <TextField 
                sx={{ mb: 3 }}
                id="telefono"
                label="Telefono"
                type="number"
                variant="outlined"
                value={telefono}
                onChange={(e) => {
                    setTelefono(e.target.value)
                    if (telefono.length > 10) {
                        setErrorTel(true);
                        setLeyendaTel("el apellido contiene mas de 20 caracteres")
                    } else {
                        setErrorTel(false);
                        setLeyendaTel("")
                    }
                }}
                error={errorTel}
                helperText={leyendaTel}
                required
                fullWidth
            />
            <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 2 }}
            >
                Registar
            </Button>
        </Box>
    )
}