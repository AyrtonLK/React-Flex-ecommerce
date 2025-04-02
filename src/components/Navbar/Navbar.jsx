import CartWidget from '../CartWidget.jsx/CartWidget';
import LogoTienda from '../Logo/Logo';
import './Navbar.css';

function Navbar() {
    
    const carrito = [1,2]

    return ( 
        <header>
            <nav className="nav-bar">
                <LogoTienda/>
                <ul className="nav-bar-items">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contactos</li>
                </ul>   
                <CartWidget cantidad={carrito.length}/>
            </nav>
        </header>
    );
}

export default Navbar;
