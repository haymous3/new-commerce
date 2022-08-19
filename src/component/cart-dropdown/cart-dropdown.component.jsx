import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const {cartItem} = useContext(CartContext)
    console.log(cartItem)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItem.map(item => <CartItem key={item.id} cartItem={item}/>) }
            </div>
            <Button>Checkout</Button>
            
        </div>

    )
}

export default CartDropdown