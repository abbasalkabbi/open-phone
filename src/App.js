import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from './pages/Home'
import Nopage from "./pages/Nopage";
import Samsung from "./pages/Samsung";
import  Login  from "./pages/Login";
import AddPost from "./pages/AddPost";
function App(){
    return(
        <div >
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
        </div>
    )
}
export default App;