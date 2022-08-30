import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.style.scss'

const CheckoutItem = ({cartItems}) => {
    
    // const {increament, cartItem} = useContext(CartContext);

    // const check = () => increament(addToCart(cartItems))
    // console.log(check())

    const {name, price, imageUrl,quantity} = cartItems;

    const { increament, decreament, remove} = useContext(CartContext)

    const increase = () => increament(cartItems)
    const decrease = () => decreament(cartItems)
    const deleter = () => remove(cartItems)
 
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt = {`${name}`}/>
            </div>
            
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrease}>
                    &#10094;
                </div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increase}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={deleter} className="remove-button">
               &#10005;
            </div>
            

        </div>
    )
}


export default CheckoutItem