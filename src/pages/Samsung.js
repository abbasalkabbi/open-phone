import React, { Component } from "react";
import {useParams } from "react-router-dom";
import Item from "../components/Item";

class Samsung extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            finished:false,
        }
    }
 // created method fetch data from api
 componentDidMount(){
     const {id}=this.props.params
     fetch(`http://localhost/open-phone/api/DataSamsung.php`)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                data:json,
                finished:true,
            })
        })
 }
  mapping(){
      if(this.state.finished){
          const data=this.state.data.map(item => 
          <Item
          id={item.id}
          img={item.url_img}
          name={item.name}
          type={item.type ==1?'Samsung':'Apple'}
          ram={item.ram}
          rom={item.rom}
          price={item.price}
          />)
          return data
      }
  }
 render(){
     return(
         <div className="container">
             <div className=" mt-5 row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {this.mapping()}
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