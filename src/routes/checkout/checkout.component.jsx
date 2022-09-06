import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock,Total} from './checkout.style.jsx'
const Checkout = () => {
    const  {cartItem, totalCartPrice} = useContext(CartContext)
    // console.log(cartItem)
     return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                     <span>Remove</span>
                </HeaderBlock> 
            </CheckoutHeader>
            {cartItem.map((item) => {
              return <CheckoutItem key={item.id} cartItems={item}/>
            })}

            <Total>Total Price:{totalCartPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;