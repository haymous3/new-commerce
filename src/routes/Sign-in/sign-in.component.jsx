import { signWithGoogle, createUserProfile } from '../../utilities/firebase/firebase.utilities';
import SignUp from '../../component/sign-up-form/sign-up.component';
// import { useEffect } from 'react';
// import { getRedirectResult } from "firebase/auth"

const SignIn = () => {

    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const users = await createUserProfile(response.user)

    //     }
    // }, [])

    const googleLogin = async () => {
        const {user} = await signWithGoogle()

        createUserProfile(user)
    }
 

    return(
        <div>
            <h1>This is our Sign In Page</h1>
            <button onClick={googleLogin}>
                sign in with google
            </button>
            <SignUp/>
        </div>
    )
}
export default SignIn;