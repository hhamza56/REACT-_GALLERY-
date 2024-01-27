
import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,} from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Product_App } from "./Product details/Product_App";



  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
 <Route path="" element={<Home/>}/> 
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="product_App" element= {<Product_App/>}/>



 </Route>
    )

  )
export default function Router_App (){
   return<RouterProvider router={router} />;
}



