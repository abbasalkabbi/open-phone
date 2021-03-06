import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import Context from "../Context";
class Phone extends Component{
      constructor(props){
          super(props);
          this.state={
              phone_data:[],
              finished:false,
              added:false,
          }
          this.AddCart=this.AddCart.bind(this)
          this.Checkisadded=this.Checkisadded.bind(this)
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
           })
    }
      AddCart(){
        if(this.state.finished){
            let url_item=`${this.props.usecontext.addcart}&iditem=${this.state.phone_data[0].id}&check=flase`
            fetch(`${url_item}`).then((res)=>res.json()).then((json)=>{
                console.log(json)
                this.setState({
                    added:true,
                })
            })
       }
      }
      Checkisadded(){
        if(this.state.finished){
            let url_item=`${this.props.usecontext.addcart}&iditem=${this.state.phone_data[0].id}&check=true`
            fetch(`${url_item}`).then((res)=>res.json()).then((json)=>{
                // eslint-disable-next-line eqeqeq
                if(json.status ==true){
                    this.setState({
                        added:true,
                    })
                }
            })

        }

      }
    render(){
        const {phone_data,finished,added}=this.state
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
   {this.Checkisadded()}
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                                  <div className="images p-3">
                                      <div className="text-center p-4"> <img id="main-image" src={url_img} width="300" /> </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="product p-4">
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-flex align-items-center"> <span className="p-2  h2 bg-primary badge rounded-pill">{type}</span> </div>
                                      </div>
                                      <div className="mt-4 mb-3">
                                          <h5 className="text-uppercase">
                                          <span className="text-uppercase text-muted brand">Name :</span>
                                          {name}
                                          </h5>
                                          <h5 className="text-uppercase">
                                          <span className="text-uppercase text-muted brand">screen :</span>
                                          {screen}
                                          </h5>
                                          <h5 className="text-uppercase">
                                          <span className="text-uppercase text-muted brand">Ram :</span>
                                          {ram}gb
                                          </h5>
                                          <h5 className="text-uppercase">
                                          <span className="text-uppercase text-muted brand">Rom :</span>
                                          {rom}gb
                                          </h5>
                                          <h5 className="text-uppercase">
                                          <span className="text-uppercase text-muted brand">Price :</span>
                                          {price}$
                                          </h5>
                                      </div>
                                      <div className="cart mt-4 align-items-center">
                                                 {(added===true)
                                                 ? <button  className='btn disabled btn-secondary text-uppercase mr-2 px-4' >Add to cart</button> 
                                                 :
                                                 <button onClick={this.AddCart} className='btn btn-danger text-uppercase mr-2 px-4' >Add to cart</button> 
                                                 }
                                          </div>
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

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>(
    <Phone
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
);
//&id_item=2