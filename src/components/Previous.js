import React from "react";

export  const Previous=(props)=>{
    let type=props.type
    let page=props.page
    return(
        (page==0)?
        <li className="page-item disabled">
             <a className="page-link" href="#" tabindex="-1" aria-disabled="true">&#8249; Previous</a>
            </li>
         :
         <li className='page-item'><a className="page-link" href={`/phones/${type}/`+(page-1)}>&#8249; Previous</a></li>

    )
    }