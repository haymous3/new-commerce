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

    return [...cartItem , {...productToAdd, quantity: 1}]

 

}

const newAdd = (cartItem, newProduct) => {
    const existing = cartItem.find((track) => track.id === newProduct.id)


    // if found, increment the quantity

    if(existing){
        return cartItem.map((item) => item.id === newProduct.id ?
        {...item, quantity: item.quantity + 1}
        :
        item)
    }
}

const removeCart = (cartItem, newProduct) => {
    const existing = cartItem.find((track) => track.id === newProduct.id)


    // if found, and quantity = 1, remove the item

    if(existing.quantity === 1){
        return cartItem.filter((item) => (item.id !== newProduct.id))
    }

    
    return cartItem.map((item) => item.id === newProduct.id ?
    {...item, quantity: item.quantity - 1}
    :
    item)
    
}

const clear = (cartItem, removeProduct) => {

    const existing = cartItem.find((track) => track.id === removeProduct.id)


    // if found, and quantity = 1, remove the item

    if(existing){
        return cartItem.filter((item) => (item.id !== removeProduct.id))
    }

}

//             

// const increament = (cartItem) =>  cartItem.map(({quantity}) => quantity + 1)


// const increament = (cartItem) =>  cartItem.map((hey) => ({...hey, quantity: hey.quantity +  1}))





export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItem: [],
    addToCart: () => {},
    quantity: 0,
    setQuantity : () => {},
    increament: () => {},
    decreament: () => {},
    remove:() => {},
    totalCartPrice: 0,
    setTotalCartPrice: () => {}
     

})


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [quantity, setQuantity] = useState(0)
   const [totalCartPrice, setTotalCartPrice] = useState(0)

    


    

    useEffect(() => {
        const arryCart = cartItem.map((item) => item.quantity)
       const count = arryCart.reduce((start, finish) => {
            return start + finish
            
        },0)

        setQuantity(count)

    }, [cartItem])

    useEffect(() => {
        const arryCart = cartItem.map((item) => item.quantity * item.price)
       const count = arryCart.reduce((start, finish) => {
            return start + finish
            
        },0)

      

        setTotalCartPrice(count)

    }, [cartItem])

    const addToCart = (productToAdd) => {
        setCartItem(addItem(cartItem, productToAdd))

    }

    const increament = (productToAdd) => {
        setCartItem(newAdd(cartItem, productToAdd))

    }

    const decreament = (productToAdd) => {
        setCartItem(removeCart(cartItem, productToAdd))

    }

    const remove = (removeProduct) => {
        setCartItem(clear(cartItem, removeProduct))

    }



    

    console.log(cartItem)

    // console.log(increament(cartItem))


    
    // const increament = (cartItem) =>  cartItem.map((hey) => ({...hey, quantity: hey.quantity +  1}))
   

    // const hey = increament(cartItem)

    // console.log(hey)


  
   

    const value = {isCartOpen, setIsCartOpen, addToCart, cartItem, quantity, increament, decreament, totalCartPrice,remove}

    

  

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}