import './App.css';
// import InputClass from './components/js/input_component_class.js';
// import InputHooks from './components/js/input_component_hooks.js';

import LoginClass from './components/js/login_component_class.js';
import LoginHooks from './components/js/login_component_hooks.js';
import SignupClass from './components/js/signup_component_class';
import SignupHooks from './components/js/signup_component_hooks';

function App() {
   return (
      <div>
         {/* <InputClass className="example_1" name="input_first" onChange={()=>{}}/>
         <br/>
         <InputClass name="input_second" />
         <br/>
         <br/>
         <InputHooks name="input_first_hooks"/> */}

         <LoginHooks />
         <LoginClass />
         <SignupClass />
         <SignupHooks />
      </div>
   );
}

export default App;
