import React, {useState, useEffect} from "react";
import InputHooks from "./ElementForm/Input_component_hooks";
import validation from "../control/validation";
import '../css/signup_component_hooks.css';
import Api from "../control/api";



function SignupHooks(props) {
   const initialState = {
      name: '',
      email: '',
      password: '',
      confirm_password: ''
   };

   const initValidation = {
      name: {
         valid: true,
         error: ""
      },
      email: {
         valid: true,
         error: ""
      },
      password: {
         valid: true,
         error: ""
      },
      confirm_password: {
         valid: true,
         error: ""
      }
   }

   const initialResult = {
      error:"",
      current_user:""
   }

   

   const [values, setValues] = useState(initialState);
   const [validations, setValidation] = useState(initValidation);
   const [isValid, setIsValid] = useState(false);
   const [isSubmit, setIsSubmit] = useState(false);
   const [isProgress, setIsProgress] = useState(false);


   const [isResult,setIsResult] = useState(initialResult);


   useEffect(() => {
      if(isValid && isSubmit) {
            Api.signup(values).then((result) => {
               
               setIsResult({...isResult,
               error: typeof result === "string" ? result : '',
               current_user: typeof result !== "string" ? result[result.length -1] : ""});
            });
            setIsSubmit(false);
      }
   }, [isValid, values, isSubmit, isResult]); //some problems


   useEffect(()=> {
      if(validations.name.valid && validations.name.name !== undefined &&
         validations.email.valid && validations.email.name !== undefined &&
         validations.password.valid && validations.password.name !== undefined &&
         validations.confirm_password.valid && validations.confirm_password.name !== undefined ) {
            setIsValid(true);
      } else {
         setIsValid(false);
      }
   }, [validations]);

   useEffect(() => {
      console.log(values);
      if (values.name !== "" ||
      values.email !== "" ||
      values.password !== "" ||
      values.confirm_password !== "") {
         setValidation(validate(values));
      }
   }, [values]);


   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
      setIsProgress(false);
      setIsResult({...isResult, error: '', current_user: ''});
   }


   const resetForm = () => {
      setValues(initialState);
      setIsSubmit(false);
      setIsValid(false);
      setIsProgress(false);
      setIsResult({...isResult, error: '', current_user: ''});
   }


   const handleClear = (e) => {
      e.preventDefault();
      resetForm();
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      // resetForm();
      // setValidation(validate(values));
      console.log(values);
      setIsSubmit(true);
      setIsProgress(true);
   }

   const validate = (values) => {
      return {
         [validation.minLength(values.name,4).name]:validation.minLength(values.name,4),
         [validation.isEmail(values.email).name]:validation.isEmail(values.email),
         [validation.pass(values.password).name]:validation.pass(values.password),
         [validation.confirmPass(values.confirm_password,values.password).name]:validation.confirmPass(values.confirm_password,values.password)
      }
   }

   return (
      <div className="form_valid">
         <form onSubmit={handleSubmit}>
            <label>
               <span className="name_of_input">Your name</span>
               <p className="message_of_error">{validations.name.error}</p>
               <InputHooks type="text" className="login_input" value={values.name} onChange={handleChanges} name="name" />
            </label>
            <br />
            <label>
               <span className="name_of_input">Your e-mail</span>
               <p className="message_of_error">{validations.email.error}</p>
               <InputHooks type="email" className="login_input" value={values.email} onChange={handleChanges} name="email" />
            </label>
            <br />
            <label>
               <span className="name_of_input">Your password</span>
               <p className="message_of_error">{validations.password.error}</p>
               <InputHooks type="password" className="login_input" value={values.password} onChange={handleChanges} name="password" />
            </label>
            <br />
            <label>
               <span className="name_of_input">Confirm Your password</span>
               <p className="message_of_error">{validations.confirm_password.error}</p>
               <InputHooks type="password" className="login_input" value={values.confirm_password} onChange={handleChanges} name="confirm_password" />
            </label>
            <br />
           
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

export default SignupHooks;

