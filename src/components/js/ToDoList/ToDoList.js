import { useEffect, useState } from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import "../../css/ToDoListStyles/todoPage.css";
import Button from "../ElementForm/Button";


function ToDoList(props) {
   // console.log(props);

   // const getObj = localStorage.getItem(props.authedName.name);
   // const dataFromStorage = JSON.parse(getObj);
   

   const [currentValue, setCurrentValue] = useState("");
   const [valuesEdit, setValuesEdit] = useState({});

   const [list, setList] = useState([]);

   const [indexEdit, setIndexEdit] = useState("");


   const handleChange = (e) => {
      e.preventDefault();
      setCurrentValue(e.target.value);

      setIndexEdit("");
   }

   const handleChangeEdit = (e) => {
      e.preventDefault();
      const index = e.target.name;
      setValuesEdit({index: index, value:e.target.value});
   }

   const handleClickAdd = () => {
      if (currentValue !== "") {
         setList([...list, currentValue]);
      } 
      
      setCurrentValue("");
      setIndexEdit("");
   }


   const handleRemoveClick = (event) => {
      const indexCurrent = event.target.attributes.index_item.value;
      setList(list.filter((item, index) => +indexCurrent !== index));
   }

   

   const handleEditClick = (e) => {
      const index = e.target.attributes.index_item.value;
      setIndexEdit(+index);

   }

   const handleDoneClick = (e) => {
      setIndexEdit("");

      setList(list.map((element,index) => index === +valuesEdit.index ?
      valuesEdit.value : element ));
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
         <InputHooks onChange={handleChange} value={currentValue} className="todoPage__input" placeholder="Type your task..."/>
         <Button text="ADD" onClick={handleClickAdd}/>
         {todo_list}
      </div>
   )
}

export default ToDoList;