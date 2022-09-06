import React from "react";
import { useNavigate } from "react-router-dom";
import {DirectoryContainer, BackgroundImage, Title, ShopNow, Body } from "./directory-item.styles";

const DirectoryItem = ({category}) => {

    const {title, imageUrl, route} = category;

    const navigate = useNavigate()

    const onNavigateHandler =  () => navigate(route)

    return(
        <DirectoryContainer onClick={onNavigateHandler}>
        <BackgroundImage
          imageUrl = {imageUrl}
        />
            <Body>
              <Title>{title.toUpperCase()}</Title>
              <ShopNow>SHOP NOW</ShopNow>
            </Body>
        </DirectoryContainer>
    )
   

}


export default DirectoryItem;