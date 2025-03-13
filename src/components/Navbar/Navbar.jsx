import CartWidget from '../CartWidget.jsx/CartWidget';
import LogoTienda from '../Logo/Logo';
import './Navbar.css';

function Navbar() {
    return ( 
        <header>
            <nav className="nav-bar">
                <LogoTienda/>
                <p>Logo</p>
                <ul className="nav-bar-items">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contactos</li>
                </ul>   
                <CartWidget />
            </nav>
        </header>
    );
}

export default Navbar;
