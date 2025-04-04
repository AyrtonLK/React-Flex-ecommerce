import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router";

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);
  const { categoria } = useParams();

  useEffect(() => {

    if (!todosLosProductos){
    fetchData() 
      .then(response => {
         setTodosLosProductos(response);
         setTimeout(() => {
           setLoading(false);
         }, 500);
      }) 
      .catch((err) => console.error(err));
    }
  }, [categoria]);

  return (
    loading ?

    <Loader />

    :

    <div>
    <div className="container-products">
        {
          categoria ? 

        todosLosProductos.filter(elementos => elementos.categoria === categoria).map(elementos => {
          return (
          <Item key={elementos.id} productos={elementos} />
          );
        })
 
        :

        todosLosProductos.map(elementos => {
          return (
          <Item key={elementos.id} productos={elementos} />
          );
        })}
      </div>
    </div>
  );
};
export default ItemListContainer;
