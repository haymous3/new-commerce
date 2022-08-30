import React from "react";
import Home from "./routes/home-routes/home.component";
import Navigation from "./routes/nativagation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import SHOP from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";







const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<SHOP/>} />
        <Route path="auth" element={<Auth/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
      
    </Routes>
   
    
    
  );

  


}

export default App;
