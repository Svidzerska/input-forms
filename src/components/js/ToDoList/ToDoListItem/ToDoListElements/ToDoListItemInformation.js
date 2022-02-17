import { useContext } from "react";
import InputHooks from "../../../ElementForm/Input_component_hooks";
import React from "react";

import { IndexContext } from "../../ToDoListItemControl";
import { IndexEditContext } from "../../ToDoListItemControl";


function ToDoListItemInformation(props) {
   const {
      element,
      handleChangeEdit,
   } = props;

   const index = useContext(IndexContext);
   const indexEdit = useContext(IndexEditContext);

   return (
      <p className="todoPage__information">{index + 1}. {index !== indexEdit ?
         element :
         <InputHooks value={element}
            className="todoPage_inputEdit"
            onChange={handleChangeEdit}
            name={index} />} </p>
   );
};

export default ToDoListItemInformation;

