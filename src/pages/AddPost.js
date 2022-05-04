import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const addpost='http://localhost/open-phone/api/AddPost.php'
class AddPost extends Component{
constructor(){
    super();
    this.state={
        name:'',
        type:'',
        price:'',
        ram:'',
        rom:'',
        screen:'',
        selectedImage:'',
        info:[],
        status:'',
    }
    this.onFileChange = this.onFileChange.bind(this);

}
   // upload image
   onFileChange(e) {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
        this.setState({
            selectedImage: event.target.result,
        })
    }
}
  //send data form
  handleFormSubmit( event ) {
    event.preventDefault();
    let add_post={
        name:this.state.name,
        price: this.state.price,
        ram:this.state.ram,
        rom:this.state.rom,
        type:this.state.type,
        screen:this.state.screen,
        image: this.state.selectedImage
    }
    axios({
        method: 'post',
        url: `${addpost}`,
        headers: { 'content-type': 'application/json' },
        data: add_post
      })
      .then(result => this.setState({ info: result.data.message,status:result.data.status})
        )

  }
  // start error
  error(){
    // eslint-disable-next-line eqeqeq
    if(this.state.info=='successful'){
        return(
            <div class="alert  alert-success alert-dismissible fade show text-center" role="alert">
            {this.state.info}
      </div>
        )
      }
}
// End Error
    // render
    render(){
        const {name,type,price,ram,rom,screen}=this.state
        return(
            <div className="container d-flex justify-content-center">
              {localStorage.getItem('admin')=='1'?'':<Navigate replace to="/login" />}
                  {/* Start Form */}
                  <form className="mt-1  ">
                        <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                              <div className="card-body  p-5">
                                     <h1 class=" text-center h1 mb-5"> Add_Post </h1>
                                       {/* alert Error */}
                                               {this.error()}
                                        {/* End  alert Error */}
                                      {/* Name */}
                                      <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label">Name Phone</label>
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                               value={name}
                                                               onChange={e => this.setState({ name: e.target.value })}
                                                               />
                                           </div>
                                           {/* End Name */}
                                            {/* price */}
                                        <div class="mb-3">
                                                            <label for="price" class="form-label">Price Phone</label>
                                                            <input type="number" class="form-control" id="price" aria-describedby="emailHelp"
                                                               value={price}
                                                               onChange={e => this.setState({ price: e.target.value })}
                                                               />
                                           </div>
                                           {/* End price */}
                                             {/* ram */}
                                        <div class="mb-3">
                                                            <label for="ram" class="form-label">Ram Phone</label>
                                                            <input type="number" class="form-control" id="ram" aria-describedby="emailHelp"
                                                               value={ram}
                                                               onChange={e => this.setState({ ram: e.target.value })}
                                                               />
                                           </div>
                                           {/* End ram */}
                                           {/* rom */}
                                        <div class="mb-3">
                                                            <label for="rom" class="form-label">Rom Phone</label>
                                                            <input type="number" class="form-control" id="rom" aria-describedby="emailHelp"
                                                               value={rom}
                                                               onChange={e => this.setState({ rom: e.target.value })}
                                                               />
                                           </div>
                                           {/* End rom */}
                                           {/* screen */}
                                        <div class="mb-3">
                                                            <label for="screen" class="form-label">Screen Phone</label>
                                                            <input type="number" class="form-control" id="screen" aria-describedby="emailHelp"
                                                               value={screen}
                                                               onChange={e => this.setState({ screen: e.target.value })}
                                                               />
                                           </div>
                                           {/* End rom */}
                                           {/* type */}
                                           <select class="form-select"  onChange={e => this.setState({ type: e.target.value })} >
                                                    <option selected> Select Type Phone</option>
                                                    <option value="1">Samsung</option>
                                                    <option value="2">Apple</option>
                                           </select>
                                           {/* type */}
                                             {/* upload image */}
                                            <div class="mb-5">
                                                            <label for="Image" class="form-label"> </label>
                                                            <input class="form-control" type="file" id="formFile"  onChange={this.onFileChange}/>
                                            </div>
                                            {/* addpost Button */}
                                           <div class="text-center text-lg-start mt-4 pt-2">
                                                                  <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">addpost</button>
                                            </div>
                                        {/* END addpost Button */}
                              </div>
                        </div>
                  </form>
                  {/* End form */}
            </div>
        )
    }
    // render End
}


export default AddPost;