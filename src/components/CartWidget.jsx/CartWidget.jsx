import './CartWidget.css';
import { IoCartOutline } from "react-icons/io5";


function CartWidget ({greetings}){

    return(
        <> 
        <p className='cart'><IoCartOutline/></p>
        <p className='number'>(6)</p>
        </>
        
    );
};

export default CartWidget;