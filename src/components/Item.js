import React from "react";

function Item(props){
    return(
    <div className="col">
       <div class="card h-100 shadow-sm">
           {/* img */}
              <img src={props.img} class="card-img-top" alt="..."/>
          {/* End img */}
          <div class="card-body">
              <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">{props.type}</span> <span class="float-end price-hp">{props.price}$</span> </div>
              <p class="card-text"> <span className="lead text-muted">Name:</span> {props.name}</p>
              <p class="card-text"> <span className="lead text-muted">Ram:</span> {props.ram}Gb</p>
              <p class="card-text"> <span className="lead text-muted">Rom:</span> {props.rom}Gb</p>
              <div class="text-center my-4"> <a href={props.id} class="btn btn-warning">Check offer</a> </div>
          </div>
       </div>
</div>
)
}
export default Item;