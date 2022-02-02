import React, {useState} from "react";
import './login_component_hooks.css';


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
         <input type="text"  value={values.login || ""} onChange={handleChanges} name="login"/>
         <br/>
         <input type="password"  value={values.password || ""} onChange={handleChanges} name="password"/>
         <br/>
         <input type="submit"/>
      </form>
   )
}

export default LoginHooks;

