import React, {useState, useEffect} from "react";
import '../css/signup_component_hooks.css';
import Api from "../control/api";
import propsSignUp from "../control/props_signup";
import FormBuilder from "./FormBuilder/FormBuilder";



function SignupAlternative(props) {

   const initialResult = {
      error:"",
      current_user:""
   }

   const initValue = {
      value: undefined,
   } 

   const [__values, set__Values] = useState(initValue);

   const [valuesResult, setValuesResult] = useState({});
   const [isValid, setIsValid] = useState(false);
   const [isProgress, setIsProgress] = useState(false);

   const [isResult,setIsResult] = useState(initialResult);


   useEffect(()=>{
      console.log(isValid);
   }, [isValid]);

   const handleClear = (event) => {
      event.preventDefault();
      set__Values({...__values, value: ""});
      setIsResult({...isResult, error: '', current_user: ''});
      setIsProgress(false);
      setIsValid(false);
   }

   useEffect(()=> {
      console.log(valuesResult);
      if (__values.value === "") {
         set__Values(initValue);
      }
   }, [__values]);


   const updateData = (values,isValidState) => {
      setValuesResult(values); 
      setIsValid(isValidState);
      setIsProgress(false);
      // set__Values(initValue);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(valuesResult);
      if (isValid) {
         Api.signup(valuesResult).then((result) => {
               
            setIsResult({...isResult,
            error: typeof result === "string" ? result : '',
            current_user: typeof result !== "string" ? result[result.length -1] : ""});
         });
      }
      setIsProgress(true);
   }

   return (
      <div className="form_valid">
         <form onSubmit={handleSubmit}>
            <FormBuilder data={propsSignUp} updateData={updateData} value={__values.value} isValid={isValid}/>
            <input type="submit" value="Submit" className={isValid ? "valid_submit" : "unvalid"}/> 
         </form>

         <p className={isResult.error !== "" ? "signup_res_err" : "signup_res_user"}>
            {isResult.error !== "" ? isResult.error :
            (isResult.current_user !== '' ? "you are successfully signed up as " + isResult.current_user.name : '')}
         </p>
         <div className={(isProgress && isValid) ? "animate_progress": "stop"}><p></p></div>
         <button className="button_clear" onClick={handleClear}>Clear form</button>
      </div>
   )
}

export default SignupAlternative;

