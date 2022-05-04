import { Component, useContext } from "react";
import Item from "../components/Item";
import Context from "../Context";
import { Loading } from "../components/Loading";
class Cart extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            finished:false,
        }
    }
    // created method fetch data from api
 fetchData(){
    let url=`${this.props.usecontext.cart}${localStorage.getItem('id')}`
    fetch(`${url}`)
       .then((res)=>res.json())
       .then((json)=>{
           console.log(json)
           this.setState({
               data:json,
               finished:true,

           })
       })
 }
 componentDidMount(){
    this.fetchData()
 }
    // mapping
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
    // End Mapping
    render(){
        const {finished}=this.state
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
                </div>
            )
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>(
    <Cart
    {...props}
    usecontext={useContext(Context)}
    />
)