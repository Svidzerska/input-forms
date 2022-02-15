import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";

const valuesArray = [];

function ToDoList(props) {
   console.log(props);

   const [values, setValues] = useState("");
   const [list, setList] = useState(valuesArray);
   const [number, setNumber] = useState(0);
   
   const handleChange = (e) => {
      e.preventDefault();
      setValues(e.target.value);
   }

   const handleClick = () => {
      valuesArray.push(values);
      console.log(valuesArray);

      setList(valuesArray);
      console.log(list);

      setNumber(valuesArray.length);
   }


   const handleRemoveClick = (event) => {
      console.log(event.target.item_number); //problem
      valuesArray.splice(event.target.item_number, 1);
      setList(valuesArray);
      console.log(list);

      setNumber(valuesArray.length);
   }

   useEffect(() => {
      console.log(number);
   }, [number]);

   const todo_list = list.map(function(element,index) {
      return (<div key={element} className="todoPage__list_item">
         <p>{index+1}. {element}</p>
         <div>
            <Button text ="EDIT"/>
            <Button text ="REMOVE" onClick={handleRemoveClick} item_number={index}/>
         </div>
         </div>
      )
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