import React, {useState} from "react";
import '../css/login_component_hooks.css';
import InputHooks from "./input_component_hooks";


function SignupHooks(props) {
   const initialState = {
      name: '',
      email: '',
      password: '',
      confirm_password: ''
   };

   const [values, setValues] = useState(initialState);

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   const resetForm = () => {
      console.log(values);
      setValues(initialState);
      console.log(values);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values);
      resetForm();
   } 

   return (
      <form onSubmit={handleSubmit}>
         <InputHooks type="text" className="login_hooks" value={values.name} onChange={handleChanges} name="name"/>
         <br/>
         <InputHooks type="email" className="login_hooks" value={values.email} onChange={handleChanges} name="email"/>
         <br/>
         <InputHooks type="password" className="login_hooks" value={values.password} onChange={handleChanges} name="password"/>
         <br/>
         <InputHooks type="password" className="login_hooks" value={values.confirm_password} onChange={handleChanges} name="confirm_password"/>
         <br/>
         <input type="submit"/>
      </form>
   )
}

export default SignupHooks;

