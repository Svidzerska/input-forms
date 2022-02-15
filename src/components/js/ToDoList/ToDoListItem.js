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
   </div>)
};




export default ToDoListItem;