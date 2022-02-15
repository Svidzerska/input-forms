import Button from "../ElementForm/Button";

function ToDoListItemButtons(props) {
   const {
      index,
      indexEdit,
      handleEditClick,
      handleDoneClick,
      handleRemoveClick,
   } = props;

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