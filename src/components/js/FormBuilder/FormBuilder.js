import React, {useState, useEffect} from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import Select from "../ElementForm/Select_component";
import validate from './validateHelper';
import Checkbox from "../ElementForm/Checkbox_component";



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

      let rulesResolved = getValidations[area.name]; //array
      let errorRule = rulesResolved?.find(objRule => 
         !objRule.valid
      );



      const objectField = {
               select: Select,
               checkbox: Checkbox,
               text: InputHooks,
               password: InputHooks
      }
      const Component = objectField[area.type];

      if (area.validations) {
         console.log(area.validations.onChange);
         validRules = Object.assign(validRules, {[area.name]:area.validations.onChange});
      }

      return (<label>
         <br/>
         <span className="label__name_of_input">Your {area.name}</span>
         <p className="message_of_error">{errorRule?.error ? errorRule?.error : ""}</p> 
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