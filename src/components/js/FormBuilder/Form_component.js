import '../../css/FormStyles/form_styles.css';
import FormBuilder from './FormBuilder';
import propsField from "../../control/props_field.js";
import { useEffect, useState } from 'react';
import Api from '../../control/api';


function Form(props) {

   const [valuesResult, setValuesResult] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   // const [isValid, setIsValid] = useState(false);


   
   useEffect(()=>{
      if (isSubmit) {
         Api.sendForm(valuesResult);
      }
      // setIsSubmit(false);
   }, [valuesResult]);

   const updateData = (values) => {
      console.log(1111111111);
      setValuesResult(values); 
      // setIsValid(true); //only valid data
      setIsSubmit(true);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(valuesResult);
   }

   return (
         <form onSubmit={handleSubmit} className="formAll">
            <FormBuilder data={propsField} updateData={updateData}/>
            <input type="submit" value="Submit" className={isSubmit ? "valid_submit" : "unvalid"}/> 
         </form>
   )
}

export default Form;