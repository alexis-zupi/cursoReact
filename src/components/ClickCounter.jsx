import { useState } from 'react'

//declaro un afuncion de componente
const ClickCounter = () => {
  
  //Creo una variable de estado llamada count con una funcion de actualizacion llamada setCount
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
        <button onClick={handleClick}>ClickMe!</button>
        <p>Numero de veces que hizo click = {count}</p>
        <p>Datos de el Ultimo click = {new Date().toString()}</p>
    </div>
  )
}

export default ClickCounter