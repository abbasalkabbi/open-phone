import React from "react";

export  const Next=(props)=>{
    let type=props.type
    let page=props.page
    let end=props.end
    return(
        (end==page)
        ?
        <li className="page-item disabled">
        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Next &#8250;</a>
        </li>
        :
         <li className='page-item'><a className="page-link" href={`/phones/${type}/`+(parseInt(page)+1)}>Next &#8250;</a></li>
    )
    }

//+(parseInt(page)+1)