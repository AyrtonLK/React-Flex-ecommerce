import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({ productos, volverAlInicio }) {

    const [contador, setContador] = useState(1);

    const { nombre, precio, categoria, descripcion, stock } = productos;
    
    function agregarAlCarrito(prod){
        const nuevoProducto = {
          ...prod,
          cantidad: contador,
        };
        console.log("Vas a agregar", nuevoProducto);
        setContador(1);
      };
  
    return (
        <div className="card p-4">
            <h3 className="card-header">{nombre}</h3>
            <div className="card-body">
                 <h5>Precio: ${precio}</h5>
                 <h5>Categoria: <b>{categoria.toUpperCase()}</b></h5>
                 <p><b>{descripcion}</b></p>
                 <p>Quedan <b>{stock}</b> disponiblles</p>

                 <ItemCount stock={stock} contador={contador} setContador={setContador}/>
                 
                 <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(productos)}>Agregar al carrito</button>
                 <button className="btn btn-secondary my-2" onClick={volverAlInicio}>Volver al inicio</button>
            </div>
        </div>
    );
}

export default ItemDetail;