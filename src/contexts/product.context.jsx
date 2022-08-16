import { createContext, useState } from "react";
import SHOPDATA from '../shop-data.json'


// Default Product Data value;


export const ProductContext = createContext({
    product: []
})


export const ProductProvider = ({children}) => {
    const [product, setproduct] = useState(SHOPDATA)

    const value = {product, setproduct}


    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
