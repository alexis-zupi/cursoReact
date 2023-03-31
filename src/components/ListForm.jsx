import { Button } from "@mui/material";
import Form from "./Form";

export default function ListForm() {
    const handleClick = () => {
        alert("Click!")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario completado")
    };

    const setInputs = (e, valor) => {
        valor(e.target.value)
    }

    return (
        <div>
            <Form 
                handleSubmit={handleSubmit} 
                setInputs={setInputs}  
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Boton
            </Button>
        </div>
    )
}