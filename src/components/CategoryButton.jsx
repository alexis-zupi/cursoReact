import { Button } from "@mui/material"

const CategoryButton = ({ textoBtn }) => {

  const style = {
    button: {
      mx: 1,
      width: '120px'
    }
  }

  return (    
    <Button
      variant="contained"    
      color="primary" 
      sx={style.button} 
    >
      {textoBtn}
    </Button> 
  )
}

export default CategoryButton