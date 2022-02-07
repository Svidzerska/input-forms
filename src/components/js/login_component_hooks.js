import React, {useState,useEffect} from "react";
import '../css/login_component_hooks.css';
import InputHooks from "./input_component_hooks";

import Api from "../control/Api";

function LoginHooks(props) {

   const initialResult = {
      information:"",
      current_user:""
   }

   const [values, setValues] = useState({});
   const [isType, setIsType] = useState(false);
   const [isResult,setIsResult] = useState(initialResult);

   const [isSubmit, setIsSubmit] = useState(false);
   const [error, setError] = useState(false);


   useEffect(()=> {
      if (values.login && values.password) {
         setIsType(true);
      } else {
         setIsType(false);
      }
   }, [values, isType]);

   useEffect(() => {
      if (isResult.information === "log-in is successed") {
         isAuth();
         if(isResult.current_user !== "") {
            currentUser();
         }
      }

   },[isResult, isAuth, currentUser]);

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
      setIsSubmit(false);
      setIsResult({...isResult, information:"", current_user:""});
   }

   const handleSubmit = (event) => {
      try {
      event.preventDefault();
      console.log(values);
      if (values.login && values.password) {
      Api.login(values).then((result) =>  {
         setIsResult({...isResult, information:result.information, current_user:result.current_user});
      });
      }
      setIsSubmit(true);
      setIsType(false);
   } catch {
      setError(true);
   }
   } 

   function isAuth() {
      props.updateData(values);
   }

   function currentUser() {
      props.updateUser(isResult.current_user);
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
            <input type="submit" value="Submit" className={isType ? "valid_submit" : "unvalid"}/>
         </form>
         <div className={(isSubmit && values.login && values.password) ? "animate_progress": "stop"}><p></p></div>
         <p className="login_information">
            {!error ? isResult.information : "something is wrong"}
         </p>
      </div>
   )
}

export default LoginHooks;

