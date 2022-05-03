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

function App(){
    const url_base='http://localhost/open-phone/api/'
    const url = {
      url_img:`${url_base}/assets`,
      home:`${url_base}Data.php`,
      Login:`${url_base}Login.php`,
      Samsung:`${url_base}DataSamsung.php?page=`,
      apple:`${url_base}DataApple.php?page=`,
      phone:`${url_base}Phone.php?id=`
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
                             <Route path='addpost' element={<AddPost/>}/>
                         </Route>
                   </Routes>
                   </BrowserRouter>
            </Context.Provider>
        </div>
    )
}
export default App;