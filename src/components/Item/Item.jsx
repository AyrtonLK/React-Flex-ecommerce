import "./Item.css";

function Item({ productos, filtrarProducto }) {
  const { nombre, precio, stock } = productos;

  function agregarAlCarrito(prod){
    const nuevoProducto = {
      ...prod,
      cantidad: 1,
    };
    console.log("Vas a agregar", nuevoProducto);
  }

  return (
    <div className="card p-4">
      <h3 className="card-header">{nombre}</h3>
      <h5 className="card-body">Precio: ${precio}</h5>
      <p>Quedan {stock} disponiblles</p>
      <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(productos)}>Agregar al carrito</button>
      <button className="btn btn-secondary my-2" onClick={() => filtrarProducto(productos)}>Ver detalle</button>
    </div>
  );
}

export default Item;
