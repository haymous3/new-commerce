import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up-form/sign-up.component';
import './auth.style.scss'
// import { useEffect } from 'react';
// import { getRedirectResult } from "firebase/auth"

const Auth = () => {

    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const users = await createUserProfile(response.user)

    //     }
    // }, [])

  
 

    return(
        <div className='authentication-container'>
            <SignIn/>
            
            <SignUp/>
        </div>
    )
}
export default Auth;