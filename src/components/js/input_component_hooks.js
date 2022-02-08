import React, {useEffect, useState} from "react";
import '../css/input_component.css';
import validation from "../control/validation";


const initValidation = {}

function InputHooks(props) {
   const [_value, setValue] = useState("");

   const [validationRes, setValidationRes] = useState(initValidation);

   const {
      name,
      type = "text",
      hideInput,
      required,
      placeholder,
      validations,
      onChange = () => {},
      className, 
      value
   } = props;

   // useEffect(()=>{
   //    console.log(validations);
   //    validations.onChange.forEach(element => {
   //       setValidationRes({...validationRes, name:validation[element.name](_value,element.minLength)});
   //       console.log(validationRes);
   //    });
   // },[_value]);


   function onChangeHandler(e) {
      onChange(e);
      setValue(e.target.value);
      console.log(validations.onChange); //why it doesnt work in useEffect

      validations.onChange.forEach(element => {
         setValidationRes({...validationRes, name:validation[element.name](_value,element.minLength)});
         console.log(validationRes);
      });
   }

   return (
      <input name={name} 
         type={type}
         hideInput={hideInput}
         required={required}
         placeholder={placeholder}
         className={className}
         validations={validations}
         value={typeof value !== "undefined" ? value : _value}
         onChange={onChangeHandler}
         />
   )
}

export default InputHooks;