import React, {useState, useEffect} from "react";
import InputHooks from "./Input_component_hooks";
import Select from "./Select_component";
import validation from "../control/validation";



function FormBuilder(props) {
   
   const [values, setValues] = useState({});
   const [getValidations, setGetValidations] = useState({});


   const data = props.data; //array


   useEffect(()=> {
      console.log(getValidations);
   }, [getValidations]);


   useEffect(() =>{
      console.log(values);
      console.log(Object.keys(values));
      const keys = Object.keys(values); //array
      setGetValidations(validate(values,keys));

   },[values]);


   const validate = (values,keys) => {
      let resObj = {};
      for (let i=0; i< keys.length; i++) {
         resObj = Object.assign(
          resObj, {[keys[i]]:validation.minLength(values[keys[i]],4)}
         );
      }
      return (resObj);
   }

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   const listArea = data.map(function(area) {
      const objectField = {
               select: Select,
               // checkbox: Checkbox,
               text: InputHooks
      }
      const Component = objectField[area.type];

      return <Component key={area.name}
         name={area.name}
         type={area.type}
         required={area.required}
         placeholder={area.placeholder}
         options={area.options}
         onChange={handleChanges}
      />
   });


   return (
      <div className="form_build">
         {listArea}
      </div>
   )
}

export default FormBuilder;