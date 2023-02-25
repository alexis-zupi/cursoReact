import { Button } from "@mui/material"

const CustomButton = ({ textoBtn, mensaje }) => {

  const style = {
    button: {
      mx: 1,
      width: '120px'
    }
  }

  return (    
    <Button
      variant="contained"    
      color="secondary" 
      onClick={() => {
        alert(mensaje)
      }}
      sx={style.button} 
    >
      {textoBtn}
    </Button> 
  )
}

export default CustomButton