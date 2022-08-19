import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';



const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,quantity } = useContext(CartContext)
    const toggleIcon = () => setIsCartOpen(!isCartOpen)

   

    

   

    return(
        <div className='cart-icon-container' onClick={toggleIcon}>
            <ShoppingBag className="shoping-icon"/>
            <span className='item-count'>{quantity}</span>
        </div>
    )
}

export default CartIcon