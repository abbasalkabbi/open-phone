import React from "react";

export  const Loading=()=>{
return(
    <div className=' d-flex justify-content-center'>
    <div className="spinner-border d-flex " role="status">
            <span className="  visually-hidden">Loading...</span>
   </div>
 </div>
)
}