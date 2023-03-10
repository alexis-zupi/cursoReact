import { createTheme, Paper, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemHomeContainer from './components/ItemHomeContainer';
import NavBar from './components/NavBar';
import { green } from '@mui/material/colors';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [modo, setModo] = useState(false);

  const theme = createTheme({
    palette: {
      mode: modo ? "dark" : "light",
    },
    components: {
      MuiCard: {
        defaultProps: {
          style: {
            background: green[500]
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <NavBar />
        <Switch checked={modo} onChange={e => setModo(!modo)} color='secondary'/>
        <Routes>
          <Route 
            path='/'
            element={ <Navigate to={'home'} /> }
          />
          <Route 
            path='/home' 
            element={ <ItemHomeContainer greeting='Este es el Home!!' /> } 
          />
          <Route 
            path='/productos'
            element={ <ItemListContainer /> }
          />
          <Route 
            path='/category/:category'
            element={ <ItemListContainer /> }
          />
          <Route 
            path='/item/:id'
            element={ <ItemDetailContainer /> }
          />
          <Route 
            path='*'
            element={ <h2>Error 404</h2> }
          />
        </Routes>
      </Paper>
    </ThemeProvider>
    
  )
}


export default App
