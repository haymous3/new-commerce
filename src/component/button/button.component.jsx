import "./button.styles.scss"

const Button = ({children, buttonTypes, ...otherProps}) => {

    const BUTTON_TYPES = {
        inverted:'inverted',
        google: 'google-sign-in'
    }
    return(
        <button className={`button-container ${BUTTON_TYPES[buttonTypes]}`} {...otherProps}>{children}</button>
    )
}

export default Button;