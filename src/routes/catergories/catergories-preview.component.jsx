import { useContext, Fragment } from "react";
import { CartegoriesContext } from "../../contexts/cartegories.context";
import CategoryPreview from "../../component/catergory-preview/category-preview.component";



const CartPreview = () => {
    const {catergoriesMap} = useContext(CartegoriesContext)
    return(
        <Fragment>
        {
            Object.keys(catergoriesMap).map((title) => {   
                
                const products = catergoriesMap[title]

                

                return <CategoryPreview key={title} title={title} product={products}/>
                  
                
            })
        } 
        </Fragment>
        
    )

}


export default CartPreview