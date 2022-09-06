import {React, Fragment, useContext} from "react";
import { Outlet, } from "react-router-dom";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { userSignOut } from "../../utilities/firebase/firebase.utilities";
import { LogoContainer, NavigationContainer, NavLinks, NavLink } from "./navigation.style";


const Navigation = () => {

    const {currentUser} = useContext(UserContext)

    const  {isCartOpen} = useContext(CartContext)

    console.log(isCartOpen)

    
    return(
      <Fragment>
        <NavigationContainer>
            
            <LogoContainer to='/'>
                <CrownLogo className="logo"/>
            </LogoContainer>
            
            <NavLinks>
                <NavLink to="/shop">
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={userSignOut}>SIGN OUT</NavLink>
                    ):
                    (
                        <NavLink  to="/auth">
                        SIGN IN
                         </NavLink>
                    )
                }
             
                <CartIcon/>
               
            </NavLinks>
           {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
     
    )
}

export default Navigation