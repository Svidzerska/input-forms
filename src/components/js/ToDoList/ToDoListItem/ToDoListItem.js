import ToDoListItemInformation from "./ToDoListElements/ToDoListItemInformation";
import ToDoListItemButtons from "./ToDoListElements/ToDoListItemButtons";


function ToDoListItem(props) {

   const {
      element,
      handleChangeEdit,
      handleEditClick,
      handleDoneClick,
      handleRemoveClick,
   } = props; 


   return (
   <div key={element} className="todoPage__list_item">
      <ToDoListItemInformation element={element} handleChangeEdit={handleChangeEdit}/>

      <ToDoListItemButtons 
         handleEditClick={handleEditClick}
         handleDoneClick={handleDoneClick}
         handleRemoveClick={handleRemoveClick}
      />
   </div>)
};

export default ToDoListItem;