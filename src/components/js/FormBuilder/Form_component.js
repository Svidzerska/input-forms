import '../../css/FormStyles/form_styles.css';
import FormBuilder from './FormBuilder';
import propsField from "../../control/props_field.js";
import { useEffect, useState } from 'react';
import Api from '../../control/api';


function Form(props) {

   const [valuesResult, setValuesResult] = useState({});
   const [isValid, setIsValid] = useState(false);
   const [isProgress, setIsProgress] = useState(false);


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
         Api.sendForm(valuesResult);
      }
      setIsProgress(true);
   }

   return (
         <form onSubmit={handleSubmit} className="formAll">
            <FormBuilder data={propsField} updateData={updateData}/>
            <input type="submit" value="Submit"  className={isValid ? "valid_submit" : "unvalid"}/> 
            <div className={(isValid && isProgress) ? "animate_progress": "stop"}><p></p></div>
         </form>
   )
}

export default Form;