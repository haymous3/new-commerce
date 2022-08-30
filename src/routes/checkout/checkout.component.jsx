import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import './checkout.style.scss'
const Checkout = () => {
    const  {cartItem, totalCartPrice} = useContext(CartContext)
    // console.log(cartItem)
     return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                     <span>Remove</span>
                </div> 
            </div>
            {cartItem.map((item) => {
              return <CheckoutItem key={item.id} cartItems={item}/>
            })}

            <span className="total">Total Price:{totalCartPrice}</span>
        </div>
    )
}

export default Checkout;