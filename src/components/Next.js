import React from "react";

export  const Next=(props)=>{
    let type=props.type
    let page=props.page
    return(
         <li className='page-item'><a className="page-link" href={`/phones/${type}/`+(parseInt(page)+1)}>Next &#8250;</a></li>
    )
    }

//+(parseInt(page)+1)