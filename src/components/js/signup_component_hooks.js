import React, {useState} from "react";
import '../css/login_component_hooks.css';
import InputHooks from "./input_component_hooks";
import validation from "../control/validation";


function SignupHooks(props) {
   const initialState = {
      name: '',
      email: '',
      password: '',
      confirm_password: ''
   };

   const [values, setValues] = useState(initialState);
   const [formErrors, setErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);


   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   const resetForm = () => {
      setValues(initialState);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(values);
      resetForm();
      setErrors(validate(values));
      setIsSubmit(true);
   } 

   
   const validate = (values) => {
      const errors = {};
      const regex = /\d+/; 
      if (!values.name) {
         errors.name = 'name is required!';
      }
      if (!values.email) {
         errors.email = 'e-mail is required!';
      }
      if (!values.password) {
         errors.password = 'password is required!';
      }
      if (!values.confirm_password) {
         errors.confirm_password = 'password should be confirmed!';
      }

      validation(values.name, 'name');
      
      if (Object.keys(errors).length === 0) {
         console.log(values);
         return values;
      } else {
         console.log(errors);
         return errors;
      }

      
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

