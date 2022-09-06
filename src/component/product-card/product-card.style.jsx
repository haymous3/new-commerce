import styled from "styled-components";

export const ProductCardContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;  


    button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    }

    &:hover button {
      opacity: 0.85;
      display: block;          
  }
      
  @media only screen and (max-width:1023px) {

  margin: 50px 0px;

} 

`

export const Image = styled.img`

  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  :hover {
    opacity: 0.8;
  }
`


export const Footer = styled.div`

  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;


`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

`

export const Price = styled.span`
 width: 10%;

`

