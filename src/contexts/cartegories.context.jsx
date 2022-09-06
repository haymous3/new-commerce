import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocument } from "../utilities/firebase/firebase.utilities.js";
// import SHOP_DATA from '../shop-data.js'


// Default Product Data value;


export const CartegoriesContext = createContext({
    catergoriesMap: {}
})


export const CartegoriesProvider = ({children}) => {
    const [catergoriesMap, setcatergoriesMap] = useState({})

    useEffect(() => {
        const collectionMap = async() => {
           const getCartegories = await getCollectionAndDocument()
            setcatergoriesMap(getCartegories)
      


        }

        collectionMap()
    }, [])

    const value = {catergoriesMap}


    return <CartegoriesContext.Provider value={value}>{children}</CartegoriesContext.Provider>
}
