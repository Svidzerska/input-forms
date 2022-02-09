import React, {useState} from "react";
import '../css/input_component.css';


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


   function onChangeHandler(e) {
      onChange(e);
      setValue(e.target.value);
   }

   return (
      <input name={name}
         type={type}
         hideInput={hideInput}
         required={required}
         placeholder={placeholder}
         className={className}
         value={typeof value !== "undefined" ? value : _value}
         onChange={onChangeHandler}
      />
   )
}

export default InputHooks;