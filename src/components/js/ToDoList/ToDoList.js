import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";
import ToDoListItemControl from "./ToDoListItemControl";
import ApiToDo from "../../control/apiToDo";


function ToDoList(props) {
   // console.log(props);

   const [currentValue, setCurrentValue] = useState("");
   const [list, setList] = useState([]);

   useEffect(() => {
      ApiToDo.getToDoList(props.currentUser.name).then(result => setList(result));
   }, [props.currentUser.name]);


   const handleChange = (e) => {
      e.preventDefault();
      setCurrentValue(e.target.value);
   }

   const handleClickAdd = () => {
      if (currentValue !== "") {
         ApiToDo.getToDoList(props.currentUser.name).then(result => {
            setList([...result, currentValue]);
         });
      }    
      setCurrentValue("");
   } 

   return (
      <div className="todoPage">
         <InputHooks onChange={handleChange}
            value={currentValue}
            className="todoPage__input"
            placeholder="Type your task..." />
         <Button text="ADD" onClick={handleClickAdd} className="todoPage__add_button"/>
         <ToDoListItemControl list={list} currentUser={props.currentUser} />
      </div>
   )
}

export default ToDoList;