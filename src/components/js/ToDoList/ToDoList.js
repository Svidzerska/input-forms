import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";
import ToDoListItemControl from "./ToDoListItemControl";


function ToDoList(props) {
   // console.log(props);

   // const getObj = localStorage.getItem(props.authedName.name);
   // const dataFromStorage = JSON.parse(getObj);
   

   const [currentValue, setCurrentValue] = useState("");
   const [list, setList] = useState([]);


   const handleChange = (e) => {
      e.preventDefault();
      setCurrentValue(e.target.value);
      // setIndexEdit("");
   }

   const handleClickAdd = () => {
      if (currentValue !== "") {
         setList([...list, currentValue]);
      } 
      setCurrentValue("");
      // setIndexEdit("");
   } 
   
   // const objToJson = JSON.stringify(list);
   // localStorage.setItem(props.authedName.name,objToJson);

   return (
      <div className="todoPage">
         <InputHooks onChange={handleChange} value={currentValue} className="todoPage__input" placeholder="Type your task..."/>
         <Button text="ADD" onClick={handleClickAdd}/>
         <ToDoListItemControl list={list}/>
      </div>
   )
}

export default ToDoList;