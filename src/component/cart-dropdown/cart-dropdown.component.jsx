import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropContainer, CartDropItem, EmptyImage } from './cart-dropdown.styles';


const CartDropdown = () => {
    const {cartItem} = useContext(CartContext)
    // console.log(cartItem)

    const navigate = useNavigate();

    const goToNavigate = () => {
        navigate('/checkout')
    }
    return(
        <CartDropContainer>
            <CartDropItem>
            {
                cartItem.length ? (cartItem.map(item => <CartItem key={item.id} cartItem={item}/>) )
                :
                <EmptyImage>Your Cart is Empty</EmptyImage>

            }
               
            </CartDropItem>
            <Button onClick={goToNavigate}>Checkout</Button>
            
        </CartDropContainer>

    )
}

export default CartDropdown