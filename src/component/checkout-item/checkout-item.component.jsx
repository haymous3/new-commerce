import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, ImageContainer, Image, Quantity, RemoveButton,Value, NameAndPrice, Arrow } from './checkout-item.style.jsx'

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
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt = {`${name}`}/>
            </ImageContainer>
            
            <NameAndPrice>{name}</NameAndPrice>
            <Quantity>
                <Arrow onClick={decrease}>
                    &#10094;
                </Arrow>
                    <Value>{quantity}</Value>
                <Arrow onClick={increase}>
                    &#10095;
                </Arrow>
            </Quantity>
            <NameAndPrice>{price}</NameAndPrice>
            <RemoveButton onClick={deleter}>
               &#10005;
            </RemoveButton>
            

        </CheckoutItemContainer>
    )
}


export default CheckoutItem