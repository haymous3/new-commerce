import { createContext, useState, useEffect } from "react";


const addItem = (cartItem, productToAdd) => {
  
// to create an existing Array

    const existing = cartItem.find((track) => track.id === productToAdd.id)


    // if found, increment the quantity

    if(existing){
        return cartItem.map((item) => item.id === productToAdd.id ?
        {...item, quantity: item.quantity + 1}
        :
        item)
    }

      

    // return new array with modified/new cart item

    return [...cartItem , {...productToAdd, quantity:1}]

 

}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItem: [],
    addToCart: () => {},
    quantity: 0,
})


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const arryCart = cartItem.map((item) => item.quantity)
       const count = arryCart.reduce((start, finish) => {
            return start + finish
            
        },0)

        setQuantity(count)

    }, [cartItem])
    
    
    const addToCart = (productToAdd) => {
        setCartItem(addItem(cartItem, productToAdd))

    }


   

   



  

    

    


    
    const value = {isCartOpen, setIsCartOpen, addToCart, cartItem, quantity}

    

  

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}