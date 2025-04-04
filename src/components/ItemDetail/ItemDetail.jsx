import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';


function ItemDetail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState(null);
    const [contador, setContador] = useState(1);


    
    function agregarAlCarrito(prod){
        const nuevoProducto = {
          ...prod,
          cantidad: contador,
        };
        console.log("Vas a agregar", nuevoProducto);
        setContador(1);
      };

      useEffect (() => {
            fetchData() 
              .then(response => {
                const productoAMostrar = response.find(elementos => elementos.id === parseInt(id));
                console.log(productoAMostrar);
                setProductos(productoAMostrar);
                 setTimeout(() => {
                   setLoading(false);
                 }, 500);
              }) 
              .catch((err) => console.error(err));
      },[]);
  
    return (
      loading ?

       <Loader />

       :

      <div className="card p-4">

            <h3 className="card-header">{productos.nombre}</h3>
            <div className="card-body">
                 <h5>Precio: ${productos.precio}</h5>
                 <h5>Categoria: <b>{productos.categoria.toUpperCase()}</b></h5>
                 <p><b>{productos.descripcion}</b></p>
                 <p>Quedan <b>{productos.stock}</b> disponiblles</p>

                 <ItemCount stock={productos.stock} contador={contador} setContador={setContador}/>
                 
                 <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(productos)}>Agregar al carrito</button>
                 <Link to="/">
                 <button className="btn btn-secondary my-2">Volver al inicio</button>
                 </Link> 
            </div>
         </div>
    );
};

export default ItemDetail;