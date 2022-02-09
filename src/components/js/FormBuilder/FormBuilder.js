import React, {useState, useEffect} from "react";
import InputHooks from "../Input_component_hooks";
import Select from "../Select_component";
import validate from './validateHelper';



function FormBuilder(props) {
   
   const [values, setValues] = useState({});
   const [getValidations, setGetValidations] = useState({});


   const data = props.data; //array
   let validRules = {};


   useEffect(()=> {
      console.log(getValidations);
   }, [getValidations]);


   useEffect(() =>{
      console.log(values);
      console.log(Object.keys(values));
      const keys = Object.keys(values); //array
      setGetValidations(validate(values,keys,validRules));

   },[values]);


   
   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setValues({...values,[name]:value});
   }

   // const error = getValidations[area.name];
   // console.log(error);


   const listArea = data.map(function(area) {

      const objectField = {
               select: Select,
               // checkbox: Checkbox,
               text: InputHooks,
               password: InputHooks
      }
      const Component = objectField[area.type];

      if (area.validations) {
         console.log(area.validations.onChange);
         validRules = Object.assign(validRules, {[area.name]:area.validations.onChange});
      }

      return (<label>
         <span className="label__name_of_input">Your name</span>
         <p className="message_of_error">{getValidations[area.name] ? getValidations[area.name][getValidations[area.name].method].error : ""}</p>
         <Component key={area.name}
            {...area}
            onChange={handleChanges}
         />
      </label>
      )
   });


   return (
      <div className="form_build">
         {listArea}
      </div>
   )
}

export default FormBuilder;