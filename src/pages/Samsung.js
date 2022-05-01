import React, { Component } from "react";
import {useParams } from "react-router-dom";
import Item from "../components/Item";
import { Loading } from "../components/Loading";
class Samsung extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            finished:false,
            page:0,
        }
    }
 // created method fetch data from api
 componentDidMount(){
     let {id}=this.props.params
     if(!id){
        id=0
     }
     this.setState({
         page:id
     })
     console.log(id)
     fetch(`http://localhost/open-phone/api/DataSamsung.php?page=${id}`)
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
          img={`http://localhost/open-phone/api/assets/${item.url_img}`}
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
     const {finished,page}=this.state
    let loading=""
    let Previous=''
    let Next=''
    // loadiionng  function
    if(!finished){
         loading= <Loading/>
    }
    //Previous function
    if(page===0){
        Previous= <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&#8249; Previous</a>
       </li>
    }
    else if(page===1){
       Previous= <li className='page-item'><a className="page-link" href='/samsung'>&#8249; Previous</a></li>
     }else{
       Previous= <li className='page-item'><a className="page-link" href={'/samsung/'+(page-1)}>&#8249; Previous</a></li>
     }
    //END Previous function
    //Next function
        Next=  <li className='page-item'><a className="page-link" href={'/samsung/'+(parseInt(page)+1)}>Next &#8250;</a></li>
     //END Next function
     return(
         <div className="container">
             {loading}
             {page}
             <div className=" mt-5 row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {this.mapping()}
                <div class="fixed-bottom container">
                <ul className="pagination d-flex justify-content-between ">
                {Previous}
              {Next}
              </ul>
                </div>
               
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