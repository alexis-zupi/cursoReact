import { Typography, Box } from "@mui/material"

const ItemListContainer = ({ greeting }) => {
  
  const style = {
    boxItem: {
      backgroundColor: '#4dabf5', 
      display: 'flex',  
      justifyContent: "center",
      width: '70%',
      height: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 4
    },
    tituloItem: {
      color: '#424242',
      alignSelf: 'center',
      fontSize: 30
    }
  }

  return (
    <Box sx={style.boxItem}>
        <Typography variant="h1" sx={style.tituloItem} >{greeting}</Typography>
    </Box>
  )
}

export default ItemListContainer