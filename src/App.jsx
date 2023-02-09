import './App.css'
import Buton from './component/button/button'
import Form from './component/form/form'


function App() {

  return (
    <main className='container'>
     <Buton/>
     <h1>Hola mundo</h1>
     <Form/>
     <h2>Holaa</h2>
    </main>   

    //Esto es un React.Fragment. No se le puede colocar clases al fragment
    /*
    <>
      <h1>Hola Mundo</h1>
      <h2>Holaa</h2>
    </>
    */
  )
}

export default App
