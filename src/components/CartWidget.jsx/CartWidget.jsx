import './CartWidget.css';
import { IoCartOutline } from "react-icons/io5";
import { useAppContext } from '../../context/context';


function CartWidget (){

    const { carrito } = useAppContext();

    return(
        <> 
        <p className='cart'><IoCartOutline/></p>
        <p className='number'>{carrito.length}</p>
        </>
        
    );
};

export default CartWidget;