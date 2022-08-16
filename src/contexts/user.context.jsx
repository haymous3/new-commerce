import { createContext, useState, useEffect } from 'react';

import { authListerners, createUserProfile } from '../utilities/firebase/firebase.utilities';


// Default content

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : () => null
})





export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    const value = {currentUser, setCurrentUser} 

    useEffect(() => {
        const unSuscribe = authListerners((user) => {

            if(user){
             createUserProfile(user)
            }
            console.log(user)
            setCurrentUser(user)})

       return unSuscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}