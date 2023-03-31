import { Box, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import Formulario from "./Formulario";
import ListForm from "./ListForm";

export default function Contacto() {
    const {enqueueSnackbar} = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar("Esta es mi App. Estas en Register", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        });
    };

    return (
        <Box sx={{ mt:15 }}>
            <h2>Register</h2>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                notiStack
            </Button>
            <ListForm />
            <Formulario />
        </Box>
    );
}