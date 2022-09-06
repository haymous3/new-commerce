import { useContext, useEffect, useState, Fragment } from 'react';
import { CartegoriesContext } from '../../contexts/cartegories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../component/product-card/product-card.component';
import { CategotyContainer, Title } from './category.styles.jsx';

const Category = () => {

    const {category} = useParams()
    const {catergoriesMap} = useContext(CartegoriesContext)
    const [products, setProducts] = useState(catergoriesMap[category])


    useEffect(() => {
        setProducts(catergoriesMap[category])

},  [catergoriesMap, category]) 


console.log(catergoriesMap[category])

    return (
        <Fragment>
        <Title>{category.toLocaleUpperCase()}</Title>

        <CategotyContainer>
        {
            products && 
            products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </CategotyContainer>

        </Fragment>

    )
      

                
}


export default Category