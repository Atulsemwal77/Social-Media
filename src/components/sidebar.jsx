import { NavLink } from "react-router-dom";

const Sidebar = ()=>{
    return (
      

      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar w-25 " >
        <span className="fs-4 text-white">Sidebar</span>
        
        <hr className="text-white" />
        
        <ul className="nav nav-pills flex-column mb-auto text-center">
          <li className="nav-item">
            <NavLink 
              className={({ isActive }) => `nav-link ${isActive ? 'active  ' : 'text-white'}`} 
              to='/'>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`} 
              to='/create-post'>
              Create Post
            </NavLink>
          </li>
        </ul>
        
        <hr className="text-white" />
      </div>
      
    );
}
export default Sidebar;