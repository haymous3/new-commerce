import { signWithGoogle,SignUserAuthWithEmailAndPassword } from "../../utilities/firebase/firebase.utilities"
import Button, { BUTTON_TYPES} from "../button/button.component"
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
 
import { SignInConatiner, ClickConatiner } from './sign-in.styes.jsx'


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
            await SignUserAuthWithEmailAndPassword(email,password)
  
         
           
           resetFormField()
        }
        catch(error){
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
        await signWithGoogle()   
    }
    return(
        <SignInConatiner>
            <h2>Already Created an Accont</h2>
            <span>Sign in with your email and password OR Google</span>
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

                <ClickConatiner>
                <Button type="submit">Sign Up</Button>
                <Button type="submit" onClick={googleLogin} buttonTypes={BUTTON_TYPES.google}>
                Google
                </Button>
                 </ClickConatiner>
            
               
            </form>
          
        </SignInConatiner>
    )
}

export default SignIn;