import React, {useState, useEffect} from "react";
import '../css/signup_component_hooks.css';
import Api from "../control/api";
import propsLogin from "../control/props_login";
import FormBuilder from "./FormBuilder/FormBuilder";



function LoginAlternative(props) {

   const initialResult = {
      error:"",
      current_user:""
   }


   const [valuesResult, setValuesResult] = useState({});
   const [isValid, setIsValid] = useState(false);
   const [isProgress, setIsProgress] = useState(false);

   const [isResult,setIsResult] = useState(initialResult);


   useEffect(()=>{
      console.log(isValid);
   }, [isValid]);


   const updateData = (values,isValidState) => {
      setValuesResult(values); 
      setIsValid(isValidState);
      setIsProgress(false);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(valuesResult);
      if (isValid) {
         Api.login(valuesResult).then((result) =>  {
            setIsResult({...isResult, information:result.information, current_user:result.current_user});
         });
      }
      setIsProgress(true);
   }

   useEffect(() => {
      if (isResult.information === "log-in is successed") {
         isAuth();
         if(isResult.current_user !== "") {
            currentUser();
         }
      }

   },[isResult, isAuth, currentUser]);

   function isAuth() {
      props.updateData(valuesResult);
   }

   function currentUser() {
      props.updateUser(isResult.current_user);
   }

   return (
      <div className="form_valid">
         <form onSubmit={handleSubmit}>
            <FormBuilder data={propsLogin} updateData={updateData}/>
            <input type="submit" value="Submit" className={isValid ? "valid_submit" : "unvalid"}/> 
         </form>

         <p className="login_information">
            {isResult.information}
         </p>
         <div className={(isProgress && isValid) ? "animate_progress": "stop"}><p></p></div>
      </div>
   )
}

export default LoginAlternative;

