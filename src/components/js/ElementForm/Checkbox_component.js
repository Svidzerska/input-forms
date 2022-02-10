function Checkbox(props) {
   const {
      name,
      type = "checkbox",
      hideInput,
      required,
      className, 
      value,
      id,
      onChange
   } = props;

   return (
      <div>
         <input type={type}
            id={id}
            name={name}
            value={value}
            hideInput={hideInput}
            required={required}
            className={className}
            onChange={onChange} />
         <label for={id}>{value}</label>
         <br />
      </div>
   )
}

export default Checkbox;