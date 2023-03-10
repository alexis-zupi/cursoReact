import Item from "./Item"

const ItemList = ({ productos }) => {
  return (
    <>
        {productos.map((producto) => (
            <Item 
                key={producto.id}
                id={producto.id}
                image={producto.image}
                title={producto.title}
                category={producto.category}
                price={producto.price}
            />
        ))} 
    </>
  )
}

export default ItemList