import React from "react";

function Item(){
    return(
    <div className="col">
       <div class="card h-100 shadow-sm">
           {/* img */}
              <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" class="card-img-top" alt="..."/>
          {/* End img */}
          <div class="card-body">
              <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">Samsang</span> <span class="float-end price-hp">12354.00€</span> </div>
              <h5 class="card-title"> <span className="lead text-muted">Type:</span> A50</h5>
              <div class="text-center my-4"> <a href="#" class="btn btn-warning">Check offer</a> </div>
          </div>
       </div>
</div>
)
}
export default Item