import { Component, useContext } from "react";
import axios from "axios";
import Context from "../Context";
import { Navigate } from "react-router-dom";

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            status:'',
            admin:'',
            id:""
        }
    }
    handleFormSubmit( event ) {
        const url_register=this.props.usecontext.register
        event.preventDefault();
        let register_data={
            name:this.state.name,
            email: this.state.email,
            password:this.state.password,
        }
        axios({
            method: 'post',
            url: `${url_register}`,
            headers: { 'content-type': 'application/json' },
            data: register_data
          })
            .then(result =>this.setState(
                {
                info: result.data.message,
                status:result.data.status,
                id:result.data.id,
                admin:result.data.is_admin
            }) )
      }
      error(){
        if(this.state.status ===false){
          return(
            <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
            {this.state.info}
      </div>
          )
        }else{
        if(this.state.info=='successful'){
          localStorage.setItem('id',this.state.id)
          localStorage.setItem('admin',this.state.admin)
          if(localStorage.getItem('id')){
            return(
            <Navigate replace to="/" />
            )
          }
          }
        }
    }

    render(){
        const {name,email,password}=this.state
        return(
            // container
            <div className="container d-flex justify-content-center">
                 {localStorage.getItem('id')?<Navigate replace to="/" />:''}
                {/* From */}
                <form className="mt-1">
                      {/* Card */}
                      <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                            {/* Card Body */}
                            <div className="card-body  p-5">
                                <h2 className="text-uppercase text-center mb-5"> Register </h2>
                                   {/* alert Error */}
                                   {this.error()}
                                  {/* End  alert Error */}
                                     {/* Name */}
                                     <div className="mb-3">
                                                         <label for="Name" className="form-label">Full Name</label>
                                                         <input type="text" className="form-control" id="Name" aria-describedby="emailHelp"
                                                            value={name}
                                                            onChange={e => this.setState({ name: e.target.value })}
                                                            />
                                     </div>
                                     {/* End Name */}
                                     {/* email */}
                                     <div className="mb-3">
                                                         <label for="email" className="form-label">Email</label>
                                                         <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                                            value={email}
                                                            onChange={e => this.setState({ email: e.target.value })}
                                                            />
                                     </div>
                                     {/* End email */}
                                      {/* password */}
                                      <div className="mb-3">
                                                         <label for="password" className="form-label">Password</label>
                                                         <input type="password" className="form-control" id="password" aria-describedby="emailHelp"
                                                            value={password}
                                                            onChange={e => this.setState({ password: e.target.value })}
                                                            />
                                     </div>
                                     {/* End password */}
                                      {/* Login Button */}
                                      <div class="text-center text-lg-start mt-4 pt-2">
                                                          <button type="submit" onClick={e => this.handleFormSubmit(e)} className="btn btn-primary">Register</button>
                                                           <p class="small fw-bold mt-2 pt-1 mb-0">I have an account?
                                                           <a href="/login" className="link-primary">login</a>
                                                           </p>
                                            </div>
                                      {/* END Login Button */}
                            </div>
                            {/* End Card Body */}
                      </div>
                      {/* End Card */}
                </form>
                {/* End Form */}
            </div>
            // End container
        )
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>(
    <Register
    {...props}
    usecontext={useContext(Context)}
    />
)
 