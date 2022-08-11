import React from "react";
import Home from "./routes/home-routes/home.component";
import Navigation from "./routes/nativagation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";





const Shop = () => {
  return(
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Auth/>} />
      </Route>
      
    </Routes>
   
    
    
  );

  


}

export default App;
