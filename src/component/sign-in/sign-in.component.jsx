import { signWithGoogle, createUserProfile,SignUserAuthWithEmailAndPassword } from "../../utilities/firebase/firebase.utilities"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import './sign-in.styes.scss'


const SignIn = () => {
    const defaultFormFields = {
       
        email : "",
        password : "",
       
    }


    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email,password} = formFields;

    // console.log(formFields)

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    }
    const handleSubmit = async (event) => {

        event.preventDefault()

        try{
            const {user} = await SignUserAuthWithEmailAndPassword(email,password)
           await createUserProfile(user)
           resetFormField()
        }catch(error){
            switch (error.code){
                case 'auth/wrong-password':
                alert('Incorret Password')
                break; 
                case 'auth/user-not-found':
                alert('User not created, Sign Up with your email and password')
                break;
                default:
                    console.log(error)

            }
            
            resetFormField()
        }
    }

    const googleLogin = async () => {
        const {user} = await signWithGoogle()

        createUserProfile(user)
    }
    return(
        <div className="sign-in-conatiner">
            <h2>Already Created an Accont</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                    
                <FormInput 
                    label="Email"
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
            
                <FormInput 
                    label="Password"
                    required
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
            
                <div className="buttons-container">
                    <Button type="submit">Sign Up</Button>
                    <Button type="button" onClick={googleLogin} buttonTypes='google'>
                    Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;