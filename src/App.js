import './App.css';
import InputClass from './components/input_component_class';
import InputHooks from './components/input_component_hooks';

import LoginClass from './components/login_component_class';
import LoginHooks from './components/login_component_hooks';

function App() {
   return (
      <div>
         <InputClass name="input_first" onChange={e => this.setState({value: e.target.value})}/>
         <br/>
         <InputClass name="input_second" />
         <br/>
         <br/>
         <InputHooks name="input_first_hooks"/>
         
         <LoginHooks />
         <LoginClass />
      </div>
   );
}

export default App;
