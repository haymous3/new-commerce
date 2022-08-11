import { useState } from "react";
import { createAuthWithEmailAndPassword,createUserProfile } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up.styles.scss"



const SignUp = () => {

    const defaultFormFields = {
        displayName : "",
        email : "",
        password : "",
        confirmPassword: "",
    }


    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email,password,confirmPassword} = formFields;

    console.log(formFields)

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert('Password Not Match')
            return
        }
        if(password.length < 5){
            alert('password too week')
            return;
        }
        try{
            const {user} = await createAuthWithEmailAndPassword(email,password)
           await createUserProfile(user, {displayName})
           resetFormField()
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('User has been created')
            }else{
                console.log('user creation encouted an error', error)
            }
            

        }
        



    }

    return (
        <div className="sign-up-conatiner">
            <h2>Don't have an Account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name"
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                
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
                
                <FormInput
                    label="Confirm Password"
                    required
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
                
            </form>
        </div>
    )
}


export default SignUp