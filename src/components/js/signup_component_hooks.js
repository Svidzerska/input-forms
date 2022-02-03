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
   const [isCorrectName, setCorrectName] = useState(false);
   const [isCorrectEmail, setCorrectEmail] = useState(false);
   const [isCorrectPass, setCorrectPass] = useState(false);


   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   const resetForm = () => {
      setValues(initialState);
   }

   const correctData = (bool) => {
      setCorrectName(bool);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(values);
      resetForm();
      // validate(values);
      if (validation.minLength(values.name).valid) {
         console.log(validation.minLength(values.name).name);
         correctData(true);
         informationToUser(validation.minLength(values.name).name);
      } else {
         console.log(validation.minLength(values.name).error);
         correctData(false);
         informationToUser(validation.minLength(values.name).error);
      }
   } 
   
   let warning;

   const informationToUser = (data) => {
      warning = <span>{data}</span>;
      console.log(warning);
   } 

   console.log(warning);

   // const renderWarning = (result, isCorrectName) => {
   //       console.log(999999999999);
   //       console.log(isCorrectName);
   //       if (isCorrectName) {
   //          warning = <span value="22222222"/>
   //       }
   //    }
   
   
   return (
      <form onSubmit={handleSubmit}>
         {warning}
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

