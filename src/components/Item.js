import React from "react";

function Item(props){
    return(
    <div className="col">
       <div className="card h-100 shadow-sm">
           {/* img */}
              <img src={props.img} className="card-img-top" alt="..."/>
          {/* End img */}
          <div className="card-body">
              <div className="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">{props.type}</span> <span className="float-end price-hp">{props.price}$</span> </div>
              <p className="card-text"> <span className="lead text-muted">Name:</span> {props.name}</p>
              <p className="card-text"> <span className="lead text-muted">Ram:</span> {props.ram}Gb</p>
              <p className="card-text"> <span className="lead text-muted">Rom:</span> {props.rom}Gb</p>
              <div className="text-center my-4"> <a href={`/phone/${props.id}`} class="btn btn-warning">Check offer</a> </div>
          </div>
       </div>
</div>
)
}
export default Item;