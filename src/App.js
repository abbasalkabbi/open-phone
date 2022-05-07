import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from './pages/Home'
import Nopage from "./pages/Nopage";
import Phones from "./pages/Phones";
import  Login  from "./pages/Login";
import AddPost from "./pages/AddPost";
import Context from "./Context";
import Phone from "./pages/Phone";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App(){
    const url_base='http://localhost/open-phone/api/'
    const url = {
      url_img:`${url_base}/assets`,
      home:`${url_base}Data.php`,
      Login:`${url_base}Login.php`,
      register:`${url_base}register.php`,
      Phones:`${url_base}DataPhones.php?page=`,
      phone:`${url_base}Phone.php?id=`,
      url_count:`${url_base}Count.php?type=`,
      addcart:`${url_base}AddCart.php?iduser=${localStorage.getItem('id')}`,
      cart:`${url_base}Cart.php?iduser=`
      };
    return(
        <div >
            <Context.Provider  value={url}>
                    <BrowserRouter>
                   <Routes>
                         <Route path="/" element={<Layout />}>
                              <Route index element={<Home/>}/>
                              <Route path="phones/:type" element={<Phones/>}>
                                  <Route path=":id" element={<Phones/>}/>
                              </Route>
                             <Route path="phone/:id" element={<Phone/>}/>
                             <Route path="*" element={<Nopage/>}/>
                             <Route path='login' element={<Login/>}/>
                             <Route path='register' element={<Register/>}/>
                             <Route path='addpost' element={<AddPost/>}/>
                             <Route path='cart' element={<Cart/>}/>
                         </Route>
                   </Routes>
                   </BrowserRouter>
            </Context.Provider>
        </div>
    )
}
export default App;