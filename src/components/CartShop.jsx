import { useState } from 'react'


const CartShop = ({ initation, min, max }) => {
  initation = 0;
  min = 0;
  max = 6;

  const [count, setCount] = useState(initation);
  
  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
        setCount(count - 1);
    }
  };

  const handleAdd = () => {
    console.log(count);
  };

  return (
    <div>
        <div>
          <button onClick={handleIncrement}>+</button>
          <span>{count}</span>
          <button onClick={handleDecrement}>-</button>
        </div>
        <button onClick={handleAdd}>Agregar al Carro</button>
    </div>
  )
}

export default CartShop