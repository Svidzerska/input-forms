import InputHooks from "./Input_component_hooks";

function FormBuilder(props) {

   const handleChanges = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name, value);
      console.log(props.data);
   }

   return (
      <div className="form_build">
         <InputHooks name={props.data[1].name}
            type={props.data[1].type}
            hideInput={props.data[1].hideInput}
            required={props.data[1].required}
            placeholder={props.data[1].placeholder}
            className="form_build__input1"
            validations={props.data[1].validations}
            onChange={handleChanges} />
         <InputHooks name={props.data[2].name}
            type={props.data[2].type}
            hideInput={props.data[2].hideInput}
            required={props.data[2].required}
            placeholder={props.data[2].placeholder}
            className="form_build__input1"
            validations={props.data[2].validations}
            onChange={handleChanges} />
         <InputHooks name={props.data[3].name}
            type={props.data[3].type}
            hideInput={props.data[3].hideInput}
            required={props.data[3].required}
            placeholder={props.data[3].placeholder}
            className="form_build__input1"
            validations={props.data[3].validations}
            onChange={handleChanges} />

      </div>
   )
}

export default FormBuilder;