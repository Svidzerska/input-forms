import { useEffect, useState } from "react";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import React from "react";

const IndexContext = React.createContext(0);
const IndexEditContext = React.createContext(0);

function ToDoListItemControl(props) {
   // console.log(props.list);

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
      if (list?.length !== 0) {
         const objToJson = JSON.stringify(list);
         localStorage.setItem(props.currentUser.name,objToJson);
      }
   }, [list]);

   const todo_list = list?.map(function(element,index) {
      return (
         <IndexContext.Provider value={index}>
            <IndexEditContext.Provider value={indexEdit}>
               <ToDoListItem
                  element={element}
                  handleChangeEdit={handleChangeEdit}
                  handleEditClick={handleEditClick}
                  handleDoneClick={handleDoneClick}
                  handleRemoveClick={handleRemoveClick}
               />
            </IndexEditContext.Provider>
         </IndexContext.Provider>
      )
   });

   return (<div>
      {todo_list}
      </div>
   ) 
};

export {IndexContext};
export {IndexEditContext};
export default ToDoListItemControl;
