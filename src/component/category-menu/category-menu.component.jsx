import React from "react";
import CategoryItem from "../category-item/category-item.component";
import './category-menu.styles.scss'

const CategoryMenu = ({catergoties}) => {

    console.log(catergoties)
    return(
        <div className="categories-container">
    {catergoties.map((category) => (
     <CategoryItem key={category.id} category={category}/>
    
    ))}
    </div>
    )
  

    
}

export default CategoryMenu;