import React from "react";
import { Component } from "react";
import Item from "../components/Item";

class Home extends Component{
    constructor(){
        super()
        this.state={
        }
    }


    render(){
        return(
        <div className="container">
            {/* titel */}
           <section className="py-5 text-center">
               <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1>
                            Open Phone
                        </h1>
                        <p className="lead text-muted"> Lorem12

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
             <Item/>
             <Item/>
             <Item/>
             <Item/>
             <Item/>
           </div>
           {/* ENd Show item */}
        </div>
        )
    }
}
export default Home
