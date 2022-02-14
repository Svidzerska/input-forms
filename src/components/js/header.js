import {
   NavLink
} from "react-router-dom";

function Header(props) {
   return (
      <div className='header'>

         <div>
            <p className='home'>
               <NavLink to="/" className="nav-link">
                  Home
               </NavLink>
            </p>
         </div>
         <nav>
            <div className='navigation_tools'>
               <p>
                  <NavLink to="/login" className="nav-link">
                     Login
                  </NavLink>
               </p>
               <p>
                  <NavLink to="/signup" className="nav-link">
                     Sign Up
                  </NavLink>
               </p>
               <p>
                  <NavLink to="/dashboard" className="nav-link">
                     Dashboard
                  </NavLink>
               </p>
               <p>
                  <NavLink to="/todolist" className="nav-link">
                     To Do List
                  </NavLink>
               </p>
               <p className={props.currentUser.name ? "navigation_tools__currentUser" : "navigation_tools__no_currentUser"}>
                  {props.currentUser.name ? "Logged in as " + props.currentUser.name : ""}
               </p>
            </div>
         </nav>
      </div>
   )
}

export default Header;

