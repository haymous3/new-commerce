import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CartIconConatainer, ItemCount, ShoppingBag } from'./cart-icon.styles';



const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,quantity } = useContext(CartContext)
    const toggleIcon = () => setIsCartOpen(!isCartOpen)

   

    

   

    return(
        <CartIconConatainer onClick={toggleIcon}>
            <ShoppingBag className="shopping-icon"/>
            <ItemCount>{quantity}</ItemCount>
        </CartIconConatainer>
    )
}

export default CartIcon