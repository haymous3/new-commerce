import {BaseButton, GoogleSignIn, InvertedButton} from "./button.styles"


export const BUTTON_TYPES = {
    base:'base',
    inverted:'inverted',
    google: 'google-sign-in'
}

const getButton = (buttonTypes = BUTTON_TYPES.base) =>(
    {
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.inverted]: InvertedButton,
        [BUTTON_TYPES.google]: GoogleSignIn
    }[buttonTypes])



const Button = ({children, buttonTypes, ...otherProps}) => {

   const CustomButton = getButton(buttonTypes)

    
    return(
       
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;