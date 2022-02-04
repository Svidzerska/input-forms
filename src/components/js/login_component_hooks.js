import React, {useState} from "react";
import '../css/login_component_hooks.css';
import InputHooks from "./input_component_hooks";


function LoginHooks(props) {
   const [values, setValues] = useState({});

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values);
   } 

   return (
      <div className="form_login">
         <form onSubmit={handleSubmit}>
            <span className="name_of_input">Your name</span><br />
            <InputHooks type="text" className="login_hooks" onChange={handleChanges} name="login" />
            <br />
            <span className="name_of_input">Your password</span><br />
            <InputHooks type="password" className="login_hooks" onChange={handleChanges} name="password" />
            <br />
            <input type="submit" value="Submit" />
         </form>
      </div>
   )
}

export default LoginHooks;

