import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemListDetail({ items }) {
    const { id } = useParams();
    
    const productoFilter = id 
        ? items.filter((producto) => producto.id == id) 
        : items;

    return (
        <>
            {productoFilter.map((prod) => (
                <ItemDetail
                    key={prod.id}
                    id={prod.id}
                    image={prod.image}
                    title={prod.title}
                    category={prod.category}
                    price={prod.price}
                    description={prod.description}
                    rating={prod.rating}
                />
            ))}
        </>
    );
}