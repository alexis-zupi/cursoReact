import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { StyledContainerProducts } from "./StyledComponents";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/firebase-config";

export default function ItemListContainer()  { 
    const { category } = useParams();
    const [items, setItems] = useState([]);

    const itemsCollectionRef = collection(db, "items");
    const getItems = async () => {
        const itemsCollection = await getDocs(itemsCollectionRef);
        setItems(
            itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
    }

    useEffect(() => {
        getItems()
    }, []);
    
    const FiltroProducto = category
    ? items.filter((prod) => prod.category === category)
    : items;

    return (
        <StyledContainerProducts>    
            {category ? <ItemList productos={FiltroProducto} /> : <ItemList productos={items} />}  
        </StyledContainerProducts> 
    );
}
