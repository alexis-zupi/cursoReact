import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemListDetail({ productos }) {
    const { id } = useParams();
    
    const productoFilter = productos.filter((producto) => producto.id == id);
    console.log(productoFilter);

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
                    rating={prod.rating.count}
                />
            ))}
        </>
    );
}