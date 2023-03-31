import Item from "./Item"

export default function ItemList({ productos }) {
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
