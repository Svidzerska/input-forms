import InputHooks from "../ElementForm/Input_component_hooks";


function ToDoListItemInformation(props) {
   const {
      element,
      index,
      indexEdit,
      handleChangeEdit,
   } = props;

   return (<p>{index + 1}. {index !== indexEdit ?
      element :
      <InputHooks value={element}
         className="todoPage_inputEdit"
         onChange={handleChangeEdit}
         name={index} />} </p>);
};


export default ToDoListItemInformation;

