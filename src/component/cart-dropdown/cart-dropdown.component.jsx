import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const {cartItem} = useContext(CartContext)
    // console.log(cartItem)

    const navigate = useNavigate();

    const goToNavigate = () => {
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItem.map(item => <CartItem key={item.id} cartItem={item}/>) }
            </div>
            <Button onClick={goToNavigate}>Checkout</Button>
            
        </div>

    )
}

export default CartDropdown