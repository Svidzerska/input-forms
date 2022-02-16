import { useEffect, useState } from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoListItemControl(props) {
   console.log(props.list);

   const [valuesEdit, setValuesEdit] = useState({});
   const [list, setList] = useState([]);
   
   const [indexEdit, setIndexEdit] = useState("");

   useEffect(() => {
      setList(props.list);
   }, [props.list]);

   const handleChangeEdit = (e) => {
      e.preventDefault();
      const index = e.target.name;
      setValuesEdit({index: index, value:e.target.value});
   }

   const handleRemoveClick = (e) => {
      const indexCurrent = e.target.attributes.index_item.value;
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

    
   useEffect(() => {
      console.log(list);
      const objToJson = JSON.stringify(list);
      localStorage.setItem(props.currentUser.name,objToJson);
   }, [list]);

   const todo_list = list.map(function(element,index) {

      return <ToDoListItem element={element}
         index={index}
         indexEdit={indexEdit}
         handleChangeEdit={handleChangeEdit}
         handleEditClick={handleEditClick}
         handleDoneClick={handleDoneClick}
         handleRemoveClick={handleRemoveClick}
      />
   });

   return (<div>
      {todo_list}
      </div>
   ) 
};


export default ToDoListItemControl;
