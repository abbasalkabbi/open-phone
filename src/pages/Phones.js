import React, { Component ,useContext } from "react";
import {useParams } from "react-router-dom";
import Item from "../components/Item";
import { Loading } from "../components/Loading";
import Context from "../Context";
import { Next } from "../components/Next";
import { Previous } from "../components/Previous";
class Phones extends Component{
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
     let {type}=this.props.params
     let url;
     console.log(type)
     if(type=='samsung'){
         url = this.props.usecontext.Samsung
     }else if(type == 'apple'){
        url = this.props.usecontext.apple
     }
  console.log(url)
     if(!id){
        id=0
     }
     this.setState({
         page:id
     })
     fetch(`${url}${id}`)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                data:json,
                finished:true,

            })
           console.log(json)
        })
 }
  mapping(){
      if(this.state.finished){
          const data=this.state.data.map(item =>
          <Item
          id={item.id}
          img={`http://localhost/open-phone/api/assets/${item.url_img}`}
          name={item.name}
          // eslint-disable-next-line eqeqeq
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
    let {type}=this.props.params
    let loading=""

    // loadiionng  function
    if(!finished){
         loading= <Loading/>
    }
     return(
         <div className="container">
             {loading}
             <div className=" mt-5 row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {this.mapping()}
             </div>
             <ul className="pagination d-flex justify-content-between m-1 ">
                <Previous page={page} type={type} />
                <Next page={page} type={type}/>
              </ul>
         </div>
     )
 }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>(
    <Phones
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />

)