import React, {useState} from "react";

import './App.css';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from "react-router-dom";


import LoginClass from './components/js/login_component_class.js';
import LoginHooks from './components/js/login_component_hooks.js';
import SignupClass from './components/js/signup_component_class';
import SignupHooks from './components/js/signup_component_hooks';
import HomePage from './components/js/home_page';
import BackgroundChange from "./components/control/background_color";

function App() {

   let background = BackgroundChange(); //state?

   return (
      <Router>
         <div className={background} >
            <div className='header'>
               <div>
                  <p className='home'>
                     <Link to="/">Home</Link>
                  </p>
               </div>
               <nav>
                  <div className='navigation_tools'>
                     <p>
                        <Link to="/login">Login</Link>
                     </p>
                     <p>
                        <Link to="/signup">Sign Up</Link>
                     </p>
                  </div>
               </nav>
            </div>

            <Routes>
               <Route path="/login" element={<LoginHooks/>} />
               <Route path="/signup" element={<SignupHooks />} />
               <Route path="/" element={<HomePage/>} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
