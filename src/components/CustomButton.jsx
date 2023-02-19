import { Button } from "@mui/material"

const CustomButton = ({ textoBtn, mensaje }) => {

  const style = {
    button: {
      mx: 1,
      width: '120px'
    }
  }
  const handleClick = () => {
    alert(mensaje)
  }

  return (    
    <Button
      variant="contained"    
      color="secondary" 
      onClick={handleClick}
      sx={style.button} 
    >
      {textoBtn}
    </Button> 
  )
}

export default CustomButton