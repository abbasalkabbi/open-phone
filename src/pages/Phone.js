import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import Context from "../Context";
class Phone extends Component{
      constructor(){
          super();
          this.state={
              phone_data:[],
              finished:false
          }
      }
// created method fetch data from api
componentDidMount(){
    let {id}=this.props.params
    let url=this.props.usecontext.phone
    fetch(`${url}${id}`)
       .then((res)=>res.json())
       .then((json)=>{
           this.setState({
            phone_data:json,
               finished:true,

           })
           console.log(json)
       })
}
    render(){
        const {phone_data,finished}=this.state
        let  name,price,ram,rom,type,screen,url_img
        let loading=<Loading/>
        if(finished){
          loading=''
           name=phone_data[0].name
           price=phone_data[0].price
           type=phone_data[0].type ==1?'Samsung':'Apple'
           ram=phone_data[0].ram
           rom=phone_data[0].rom
           screen=phone_data[0].screen_phone
           url_img=`${this.props.usecontext.url_img} /${phone_data[0].url_img}`
        }
        return(
<div class="container mt-5 mb-5">
    {loading}
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                                  <div class="images p-3">
                                      <div class="text-center p-4"> <img id="main-image" src={url_img} width="300" /> </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="product p-4">
                                      <div class="d-flex justify-content-between align-items-center">
                                          <div class="d-flex align-items-center"> <span class="p-2  h2 bg-primary badge rounded-pill">{type}</span> </div> 
                                      </div>
                                      <div class="mt-4 mb-3">
                                          <h5 class="text-uppercase">
                                          <span class="text-uppercase text-muted brand">Name :</span>
                                          {name}
                                          </h5>
                                          <h5 class="text-uppercase">
                                          <span class="text-uppercase text-muted brand">screen :</span>
                                          {screen}
                                          </h5>
                                          <h5 class="text-uppercase">
                                          <span class="text-uppercase text-muted brand">Ram :</span>
                                          {ram}gb
                                          </h5>
                                          <h5 class="text-uppercase">
                                          <span class="text-uppercase text-muted brand">Rom :</span>
                                          {rom}gb
                                          </h5>
                                          <h5 class="text-uppercase">
                                          <span class="text-uppercase text-muted brand">Price :</span>
                                          {price}$
                                          </h5>
                                      </div>
                                      <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                                  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default (props)=>(
    <Phone
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
);