import '../../css/FormStyles/form_styles.css';
import FormBuilder from './FormBuilder';
import propsField from "../../control/props_field.js";
import { useEffect, useState } from 'react';
import Api from '../../control/api';


function Form(props) {

   const [valuesResult, setValuesResult] = useState({});
   // const [isSubmit, setIsSubmit] = useState(false);
   const [isValid, setIsValid] = useState(false);

   // useEffect(() => {
   //    console.log(valuesResult);
   // }, [valuesResult]);

   useEffect(()=>{
      console.log(isValid);
   }, [isValid]);

   const updateData = (values,isValidState) => {
      setValuesResult(values); 
      setIsValid(isValidState);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(valuesResult);
      if (isValid) {
         Api.sendForm(valuesResult);
      }
   }

   return (
         <form onSubmit={handleSubmit} className="formAll">
            <FormBuilder data={propsField} updateData={updateData}/>
            <input type="submit" value="Submit"  className={isValid ? "valid_submit" : "unvalid"}/> 
         </form>
   )
}

export default Form;