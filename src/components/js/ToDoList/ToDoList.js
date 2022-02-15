import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";

let valuesArray = [];



function ToDoList(props) {
   // console.log(props);

   // const getObj = localStorage.getItem(props.authedName.name);
   // const dataFromStorage = JSON.parse(getObj);
   


   const initValuesArray = [];

   const [values, setValues] = useState("");
   const [valuesEdit, setValuesEdit] = useState({});

   const [list, setList] = useState(initValuesArray);
   const [number, setNumber] = useState(0); //questions

   const [indexEdit, setIndexEdit] = useState("");

   

   const handleChange = (e) => {
      e.preventDefault();
      setValues(e.target.value);
      setIndexEdit("");
   }

   const handleChangeEdit = (e) => {
      e.preventDefault();
      const index = e.target.name;
      setValuesEdit({index: index, value:e.target.value});
   }

   const handleClickAdd = () => {
      if (values !== "") {
         valuesArray.push(values);
      } 
      
      console.log(valuesArray);
      setList(valuesArray);
      console.log(list);

      setNumber(valuesArray.length);  //question

      setValues("");
      setIndexEdit("");
   }


   const handleRemoveClick = (event) => {
      const index = event.target.attributes.index_item.value;
      valuesArray.splice(+index, 1);

      setList(valuesArray);
      setNumber(valuesArray.length); //question
   }

   

   const handleEditClick = (e) => {
      const index = e.target.attributes.index_item.value;
      setIndexEdit(+index);
   }

   const handleDoneClick = (e) => {
      valuesArray.splice(+valuesEdit.index, 1, valuesEdit.value);

      setList(valuesArray);
      setNumber(valuesArray.length); //question

      setIndexEdit("");
   };


   // useEffect(() => {
   //    console.log(list.length);
   //    console.log(list);

   // }, [list]);

   console.log(list);

   // const objToJson = JSON.stringify(list);
   // localStorage.setItem(props.authedName.name,objToJson);

   const todo_list = list.map(function(element,index) {
      

      return (<div key={element} className="todoPage__list_item">
         <p>{index + 1}. {index !== indexEdit ?
          element :
           <InputHooks value={element}
            className="todoPage_inputEdit"
            onChange={handleChangeEdit}
            name={index} />}</p>
         <div>
            <Button text={index !== indexEdit ? "EDIT" : "DONE"}
               onClick={index !== indexEdit ? handleEditClick : handleDoneClick}
               index_item={index} />
            <Button text="REMOVE"
               onClick={handleRemoveClick}
               index_item={index} />
         </div>
      </div>
      )
   });

   return (
      <div className="todoPage">
         <InputHooks onChange={handleChange} value={values} className="todoPage__input" placeholder="Type your task..."/>
         <Button text="ADD" onClick={handleClickAdd}/>
         {todo_list}
      </div>
   )
}

export default ToDoList;