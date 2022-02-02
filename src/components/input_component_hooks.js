import React, {useState} from "react";
import './input_component_hooks.css';



function InputHooks(props) {
   const [value, setValue] = useState("");
   return <input placeholder="hooks" className="input_hooks" value={value} onChange={e => setValue(e.target.value)} name={props.name}/>
}

export default InputHooks;