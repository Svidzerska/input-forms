function Checkbox(props) {
   const {
      name,
      type = "checkbox",
      hideInput,
      required,
      className, 
      value,
      id
   } = props;

   return (
      <div>
         <input type={type}
            id={id}
            name={name}
            value={value}
            hideInput={hideInput}
            required={required}
            className={className} />
         <label for={id}>{value}</label>
         <br />
      </div>
   )
}

export default Checkbox;