
import { Outlet } from "react-router-dom";
import { NavItem } from "../components/NavItem";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">OPEN PHONE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
             <NavItem name='Home' url=''/>
        </li>
        <li class="nav-item">
          <NavItem name='Samsung' url='phones/samsung'/>
        </li>
        <li class="nav-item dropdown">
            <NavItem name='Apple' url='phones/apple'/>
        </li>
        {
        localStorage.getItem('id')
        ?
        <li class="nav-item dropdown">
            <NavItem name='Add Post' url='AddPOst'/>
        </li>
        :
        <li class="nav-item dropdown">
             <NavItem name='Login' url='login'/>
        </li>
        }
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