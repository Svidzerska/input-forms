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

function App() {
   return (
      <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/login">Login</Link>
                  </li>
                  <li>
                     <Link to="/signup">Sign Up</Link>
                  </li>
               </ul>
            </nav>
            <Routes>
               <Route path="/login" element={<LoginHooks/>} />
               <Route path="/signup" element={<SignupHooks />} />
               <Route path="/" element={<LoginClass />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
