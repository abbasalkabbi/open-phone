import React from "react";
import { NavLink } from "react-router-dom";
export  const NavItem=(props)=>{
    let url=props.url
    let Name=props.name
    return(
        <NavLink
             to={`/${url}`}
             className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
             >
             {Name}
        </NavLink>
    )
    }