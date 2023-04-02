import { useEffect, useState } from "react";
import ItemListDetail from "./ItemListDetail";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/firebase-config";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  
  const itemsCollectionRef = collection(db, "items");
  const getItems = async () => {
      const itemsCollection = await getDocs(itemsCollectionRef);
      setItems(
          itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
      );
  };

  useEffect(() => {
      getItems()
  }, []);
  
  console.log(items);

  return (
    <ItemListDetail items={items} />
  )
}
