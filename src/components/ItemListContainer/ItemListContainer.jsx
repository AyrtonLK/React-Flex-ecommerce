import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { fetchData } from "../../fetchData";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);
  const [productoFiltrado, setProductoFiltrado] = useState(null)

  useEffect(() => {

    fetchData(false) 
      .then(response => {
         setTodosLosProductos(response);
         setTimeout(() => {
           setLoading(false);
         }, 500);
      }) 
      .catch((err) => console.error(err));
      
  }, []);

  return (
    loading ?
    <Loader />
    :

    <div>
    <div className="container-products">
        {todosLosProductos.map((elementos) => {
          return (
          <Item key={elementos.id} productos={elementos} filtrarProducto={setProductoFiltrado} />
          )
        })}
      
      </div>
      {
        productoFiltrado && <ItemDetail productos={productoFiltrado} volverAlInicio={() => setProductoFiltrado(null)}/>
      }
    </div>
  );
};

export default ItemListContainer;
