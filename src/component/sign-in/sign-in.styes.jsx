import styled from 'styled-components'


export const SignInConatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2{
        margin: 10px 0px;
    }

    

    @media only screen and (max-width:1023px){
      width: 100%;

      button{
        margin-top: 20px;
    }
    }


`

export const ClickConatiner = styled.div`

        display: flex;
        justify-content: space-between;

        @media only screen and (max-width:1023px){
            flex-direction: column;
        }
`




    // .click-container{
   
    // }
