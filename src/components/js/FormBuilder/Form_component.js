import '../../css/home_page.css';
import FormBuilder from './FormBuilder';
import propsField from "../../control/props_field.js";
import { useState } from 'react';
import Api from '../../control/api';


function Form(props) {

   const [valuesResult, setValuesResult] = useState({});

   const updateData = (values) => {
      setValuesResult(values);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(valuesResult);
      Api.sendForm(valuesResult);
   }

   return (
         <form onSubmit={handleSubmit}>
            <FormBuilder data={propsField} updateData={updateData}/>
            <input type="submit" value="Submit"/> 
         </form>
   )
}

export default Form;