import { signWithGoogle, createUserProfile } from '../../utilities/firebase/firebase.utilities'

const SignIn = () => {

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
        </div>
    )
}
export default SignIn;