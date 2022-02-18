import {
   NavLink
} from "react-router-dom";
import Api from "../control/api";

function Header(props) {
   console.log(props.currentUser);

   const logOut = () => {
      Api.logout().then(result => console.log(result));
      props.getLogout();
   }

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
               <p className="navigation_tools__weather">
                  <NavLink to="/weather" className="nav-link">
                     Weather
                  </NavLink>
               </p>
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
               <p className={props.currentUser ? "navigation_tools__currentUser" : "navigation_tools__no_currentUser"}>
                  {props.currentUser ? "Logged in as " + props.currentUser.name : ""}
               </p>
               <p className={props.currentUser ? "navigation_tools__currentUser_login" : "navigation_tools__no_currentUser_logout"}>
                  <NavLink to="/login" className="nav-link-logout" onClick={logOut}>
                     Log out
                  </NavLink>
               </p>
            </div>
         </nav>
      </div>
   )
}

export default Header;

