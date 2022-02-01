import './App.css';
import InputFirst from './components/input-component';
import InputHooks from './components/input-component_hooks';
import Login from './components/login_component';
import LoginClass from './components/login_component_class';

function App() {
   return (
      <div>
         <InputFirst name="input_first" />
         <InputFirst name="input_second" />
         <br/>
         <br/>
         <InputHooks name="input_first_hooks"/>
         <Login />
         <LoginClass />
      </div>
   );
}

export default App;
