import React, {useState} from "react";

import './App.css';
import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom";


import LoginClass from './components/js/login_component_class.js';
import LoginHooks from './components/js/login_component_hooks.js';
import SignupClass from './components/js/signup_component_class';
import SignupHooks from './components/js/signup_component_hooks';
import HomePage from './components/js/home_page';
import BackgroundChange from "./components/control/background_color";
import Header from "./components/js/header";
import PrivateRoute from "./components/js/private_route";
import Dashboard from "./components/js/dashboard";


function App() {

   let background = BackgroundChange(); //state?
   const [isAuth, setIsAuth] = useState(false);
   const [currentUser, setCurrentUser] = useState({});

   const updateData = (values) => {
      setIsAuth(true);
   }

   const updateUser = (current_user) => {
      setCurrentUser(current_user);
      console.log(currentUser);
   }

   return (
      <Router>
         <div className={background}>
            <Header/>
            <Routes>
               {/* <Route path="/login" element={<LoginHooks updateData={updateData} updateUser={updateUser}/>} /> */}
               <Route path="/login" element={<LoginClass updateData={updateData} updateUser={updateUser}/>} />
               <Route path="/signup" element={<SignupHooks />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/dashboard" element={<PrivateRoute authed={isAuth} component={Dashboard}/>} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
