import React, {useEffect, useState} from "react";
import '../../css/input_component.css';


function InputHooks(props) {

   const [_value, setValue] = useState("");

   const {
      name,
      type = "text",
      hideInput,
      required,
      placeholder,
      onChange = () => {},
      className, 
      value
   } = props;

   useEffect(() => {
      setValue(value);
   }, [value]);

   // useEffect(()=> {
   //    console.log(value);
   //    console.log(_value);
   // }, [_value]);


   function onChangeHandler(e) {
      onChange(e);
      setValue(e.target.value); //_value
   }

   return (
      <input name={name}
         type={type}
         hideInput={hideInput}
         required={required}
         placeholder={placeholder}
         className={className}
         value={_value}
         onChange={onChangeHandler}
      />
   )
}

export default InputHooks;