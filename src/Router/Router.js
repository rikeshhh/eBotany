import React from "react";
import { Route, Routes } from "react-router-dom";
import Allproduct from "../allProducts/Allproduct";
import Blog from "../blog/Blog";
import { CartItems } from "../CartItems/CartItems";

import { LandingPage } from "../landingPage/LandingPage";
import { Main } from "../Main/Main";
import Pdetail from "../productDet/pdetail";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/AllProducts" element= {<Allproduct/> }/>
        <Route path="/cartitems" element={<CartItems/>}/>
        <Route path= "/:id" element = {<Pdetail/>}/>
        <Route path='/Blog' element={<Blog />}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};
