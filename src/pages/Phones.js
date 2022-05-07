/* eslint-disable eqeqeq */
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
            end:0,
        }
    }
 // created method fetch data from api
 fetchData(){
    let {id}=this.props.params
    let {type}=this.props.params
    let url;
    let url_count;
    if(!id){
        id=0
     }
    if(type=='samsung'){
        url = `${this.props.usecontext.Phones}${id}&&type=samsung`
        url_count = `${this.props.usecontext.url_count}samsung`
    }else if(type == 'apple'){
       url = `${this.props.usecontext.Phones}${id}&&type=apple`
       url_count = `${this.props.usecontext.url_count}apple`
    }
    console.log(url)
    this.setState({
        page:id
    })
    fetch(`${url}`)
       .then((res)=>res.json())
       .then((json)=>{
           this.setState({
               data:json,
               finished:true,

           })
       })
    fetch(`${url_count}`)
      .then((res)=>res.json()).then((json)=>{
        console.log(json)

          this.setState({
            end:json
          })

      })
 }
 componentDidMount(){
    this.fetchData()
 }
 componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.fetchData()
    }
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
    const {finished,page,end}=this.state
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
                <Next page={page} type={type} end={end}/>
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