import React, {useState} from "react";
import './input_component_hooks.css';



function InputHooks(props) {
   const [value, setValue] = useState("");
   const {
      type = "text",
      placeholder,
      onChange = () => {},
      className, 
      name
   } = props;

   function onChangeHandler(e) {
      onChange(e);
      setValue(e.target.value);
      console.log(value);
   }

   return (
            <input type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChangeHandler}
            name={name}/>
   )
}

export default InputHooks;