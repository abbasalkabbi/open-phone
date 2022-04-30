import React, { Component } from "react";
import {useParams } from "react-router-dom";

class Samsung extends Component{
 // created method fetch data from api
 componentDidMount(){
     const {id}=this.props.params
     console.log(id)
 }

 render(){
     return(
         <div className="Container">
             <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">

             </div>
         </div>
     )
 }

}

export default (props)=>(
    <Samsung
    {...props}
    params={useParams()}
    />

)