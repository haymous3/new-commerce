import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../component/product-card/product-card.component";
import './shop.styles.scss';


const SHOP = () => {
    const {product} = useContext(ProductContext)
    return(
        <div className="products-container">
            {product.map((productdata) => {
                return(
                    <ProductCard key={productdata.id} product={productdata}/>
                )
                
            })}
        </div>
    )

}


export default SHOP