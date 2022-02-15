import ToDoListItemButtons from "./ToDoListItemButtons";
import ToDoListItemInformation from "./ToDoListItemInformation";

function ToDoListItem(props) {

   const {
      element,
      index,
      indexEdit,
      handleChangeEdit,
      handleEditClick,
      handleDoneClick,
      handleRemoveClick,
   } = props;


   return (
   <div key={element} className="todoPage__list_item">
      <ToDoListItemInformation element={element}
         index={index}
         indexEdit={indexEdit}
         handleChangeEdit={handleChangeEdit}
      />

      <ToDoListItemButtons 
         index={index}
         indexEdit={indexEdit}
         handleEditClick={handleEditClick}
         handleDoneClick={handleDoneClick}
         handleRemoveClick={handleRemoveClick}
         />
   </div>)
};

export default ToDoListItem;