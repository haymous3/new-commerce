import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.style.scss';
import Button from '../button/button.component';


const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;

    const {addToCart} = useContext(CartContext)

    const addProduct = () => addToCart(product)
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonTypes='inverted' onClick={addProduct}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard