import { Routes,Route } from 'react-router-dom';
import Category from '../category/category.component';
import CartPreview from '../catergories/catergories-preview.component';
import './shop.styles.scss';


const SHOP = () => {
   
    return(
        <Routes>
            <Route index element={<CartPreview/>}/>
            <Route path=':category' element={<Category/>}/>

        </Routes>
    )
}


export default SHOP