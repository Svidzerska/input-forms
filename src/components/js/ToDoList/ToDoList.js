import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";

const valuesArray = [];

function ToDoList(props) {
   console.log(props);

   const [values, setValues] = useState("");
   
   const handleChange = (e) => {
      e.preventDefault();
      setValues(e.target.value);
   }

   const handleClick = () => {
      valuesArray.push(values);
      console.log(valuesArray);
   }

   useEffect(() => {
      console.log(values);
   }, [values]);

   const todo_list = valuesArray.map(function(element,index) {
      return <p>{index+1}. {element}</p>
   });

   // useEffect(() => {
   // }, [valuesArray]);


   return (
      <div className="todoPage">
         <InputHooks onChange={handleChange} value={values} className="todoPage__input"/>
         <Button text="ADD" onClick={handleClick}/>
         {todo_list}
      </div>
   )
}

export default ToDoList;