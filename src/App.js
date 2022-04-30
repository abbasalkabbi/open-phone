import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Nopage from "./pages/Nopage";
function App(){
    return(
        <div>
           <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="*" element={<Nopage/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App;