
import { Outlet,NavLink } from "react-router-dom";

const Layout = () => {
 
  return (
    <>
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                </ul>
           </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default  Layout;