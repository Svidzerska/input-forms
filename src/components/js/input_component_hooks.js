import React, {useState} from "react";
import '../css/input_component.css';



function InputHooks(props) {
   const [_value, setValue] = useState("");
   const {
      type = "text",
      placeholder,
      onChange = () => {},
      className, 
      name,
      value
   } = props;

   function onChangeHandler(e) {
      onChange(e);
      setValue(e.target.value);
   }

   return (
      <input type={type}
         placeholder={placeholder}
         className={className}
         value={typeof value !== "undefined" ? value : _value}
         onChange={onChangeHandler}
         name={name} />
   )
}

export default InputHooks;