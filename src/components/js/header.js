import {
   NavLink
} from "react-router-dom";

function Header() {
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
            </div>
         </nav>
      </div>
   )
}

export default Header;

