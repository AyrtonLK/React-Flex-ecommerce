import './CartWidget.css';
import { IoCartOutline } from "react-icons/io5";


function CartWidget ({cantidad}){

    return(
        <> 
        <p className='cart'><IoCartOutline/></p>
        <p className='number'>{cantidad}</p>
        </>
        
    );
};

export default CartWidget;