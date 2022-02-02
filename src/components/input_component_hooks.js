import React, {useState} from "react";
import './input_component_hooks.css';



function InputHooks(props) {
   const [value, setValue] = useState("");

   function onChangeHandler(e) {
      setValue(e.target.value);
      console.log(value);
   }

   return <input type={props.type} placeholder={props.placeholder} className={props.className} value={value} onChange={onChangeHandler} name={props.name}/>
}

export default InputHooks;