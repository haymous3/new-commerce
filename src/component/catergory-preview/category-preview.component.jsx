
// import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CatergoryPreview, Title, Preview} from './category-preview.styles.jsx';



const CategoryPreview = ({title, product}) => {
   

    return(
        <CatergoryPreview>
        
        <h2> 
            <Title to={`${title}`}  key={title}>{title.toUpperCase()}</Title>
                
        </h2>
        <Preview>
            {
                product.filter((_, index) => index < 4)
                .map((product) => 
                    <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </Preview>
    </CatergoryPreview>
    )
    
   
                                     


}

export default CategoryPreview;