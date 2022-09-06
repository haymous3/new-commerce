import styled from "styled-components";
import { BaseButton,GoogleSignIn, InvertedButton } from "../button/button.styles";


export const CartDropContainer = styled.div`
 position: absolute;
    width: 350px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;


    ${BaseButton},
    ${GoogleSignIn},
    ${InvertedButton}{
      margin-top: auto
    }

    @media only screen and (max-width:1023px){
    
      width: 80%;
      right: 12px;
    
  }


`

export const CartDropItem = styled.div`
    height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;


`


export const EmptyImage = styled.span`
 font-size: 18px;
      margin: 50px auto;

`