
import {  Outlet } from "react-router-dom";
import { Dropdown, NavItem } from "../components/NavItem";

const Layout = () => {
  function logout(){
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
   
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">OPEN PHONE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
             <NavItem name='Home' url=''/>
        </li>
        <li className="nav-item">
          <NavItem name='Samsung' url='phones/samsung'/>
        </li>
        <li className="nav-item dropdown">
            <NavItem name='Apple' url='phones/apple'/>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu text-center " aria-labelledby="navbarDropdown">
            <li>
               {
                 localStorage.getItem('id')
                 ? <Dropdown name='Cart' url='cart'/>
                 :<Dropdown name='Login' url='login'/>
                }
            </li>
             {
             localStorage.getItem('admin') =='1'
             ?
              <li>
                <Dropdown name='Add Post' url='addpost'/>
               </li>
             :''
              }
              {
                localStorage.getItem('id')
                ?<li>
                  <button className="dropdown-item "onClick={() =>{ logout(); window.location.reload()}}>Log Out</button>
                </li>
                :''
              }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default  Layout;
/**
 *
 * <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav container-fluid">
          <li className="nav-item">
             <NavLink
             to="/"
             className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
             >
             Home |
             </NavLink>
          </li>
          <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catagre
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink
                       to="/samsung"
                       className={({isActive})=>(isActive?'dropdown-item disabled ':' dropdown-item')}
                       >
                       Samsung
                       </NavLink>
                     </li>
                     <li>
                        <NavLink
                       to="/apple"
                       className={({isActive})=>(isActive?'dropdown-item disabled ':' dropdown-item')}
                       >
                       Apple
                       </NavLink>
                     </li>
                </ul>
           </li>
        </ul>
      </nav>
 */