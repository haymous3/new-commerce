import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPES } from '../button/button.component';
import { ProductCardContainer, Footer, Image, Name, Price } from './product-card.style';
import './product-card.style.scss';



const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;

    

    const {addToCart} = useContext(CartContext)

    const addProduct = () => addToCart(product)
    return(
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}></Image>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button  buttonTypes={BUTTON_TYPES.inverted} onClick={addProduct}>
            Add to Cart
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard