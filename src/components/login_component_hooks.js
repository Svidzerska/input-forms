import React, {useState} from "react";
import './login_component_hooks.css';
import InputHooks from "./input_component_hooks";


function LoginHooks(props) {
   const [values, setValues] = useState({});

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues(values => ({...values, [name]:value})); //why are parentheses () using?
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values);
   } 

   return (
      <form onSubmit={handleSubmit}>
         <InputHooks type="text" className="login_hooks" onChange={handleChanges} name="login"/>
         <br/>
         <InputHooks type="password" className="login_hooks" onChange={handleChanges} name="password"/>
         <br/>
         <input type="submit"/>
      </form>
   )
}

export default LoginHooks;

