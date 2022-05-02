import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from './pages/Home'
import Nopage from "./pages/Nopage";
import Samsung from "./pages/Samsung";
import  Login  from "./pages/Login";
import AddPost from "./pages/AddPost";
import Context from "./Context";
function App(){
    const url_base='http://localhost/open-phone/api/'
    const url = {
      home:`${url_base}Data.php`,
      Login:`${url_base}Login.php`,
      addpost:`${url_base}DataSamsung.php?page=`
      };
    return(
        <div >
            <Context.Provider  value={url}>
                    <BrowserRouter>
                   <Routes>
                         <Route path="/" element={<Layout />}>
                              <Route index element={<Home/>}/>
                              <Route path="samsung" element={<Samsung/>}>
                                  <Route path=":id" element={<Samsung/>}/>
                              </Route>
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