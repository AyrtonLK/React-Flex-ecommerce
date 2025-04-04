import { Link, Links } from 'react-router';
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
                    <Link to="/">
                    <li>Inicio</li>
                    </Link>
                    <Link to="/categoria/Procesadores">
                    <li>Procesadores</li>
                    </Link>
                    <Link to="/categoria/Placas Madre">
                    <li>Placas Madre</li>
                    </Link>
                </ul>   
                <Link to="/carrito">
                <CartWidget cantidad={carrito.length}/>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
