import { Button } from "@mui/material"

export default function CategoryButton({ textoBtn }) {
  const style = {
    btn: {
      mx: 1,
      width: 140
    }
  }

  return (    
    <Button
      variant="contained"    
      color="primary" 
      sx={style.btn} 
    >
      {textoBtn}
    </Button> 
  )
}
