import React, { useContext } from "react";
import { Component } from "react";
import Item from "../components/Item";
import Context from "../Context";
import { Loading } from "../components/Loading";
class Home extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            finished:false,
        }
    }
    componentDidMount(){
        const url=this.props.usecontext.home
        fetch(`${url}`)
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

        const {finished}=this.state
        let loading=""
          // loadiionng  function
    if(!finished){
        loading= <Loading/>
   }
        return(
        <div className="container">
            {/* titel */}
           <section className="py-5 text-center">
               <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1>
                            Open Phone
                        </h1>
                        <p className="lead text-muted"> Market Of moblie

                        </p>
                        <p>
                            <a href="/" className="btn btn-primary my-2"> Github</a>
                        </p>
                    </div>
               </div>

           </section>
           {/* End Title */}
           {/* Show item */}
           <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
           {loading}
           {this.mapping()}
           </div>
           {/* ENd Show item */}
        </div>
        )
    }
}
export default (props)=>(
    <Home
    {...props}
    usecontext={useContext(Context)}
    />
)
