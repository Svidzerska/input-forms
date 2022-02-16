import { useContext } from "react";
import React from "react";

import Button from "../../../ElementForm/Button";

import { IndexContext } from "../../ToDoListItemControl";
import { IndexEditContext } from "../../ToDoListItemControl";

function ToDoListItemButtons(props) {
   const {
      handleEditClick,
      handleDoneClick,
      handleRemoveClick,
   } = props;

   const index = useContext(IndexContext);
   const indexEdit = useContext(IndexEditContext);

   return (
      <div>
         <Button text={index !== indexEdit ? "EDIT" : "DONE"}
            onClick={index !== indexEdit ? handleEditClick : handleDoneClick}
            index_item={index} />
         <Button text="REMOVE"
            onClick={handleRemoveClick}
            index_item={index} />
      </div>
   );
};

export default ToDoListItemButtons;