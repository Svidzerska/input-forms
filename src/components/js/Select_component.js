function Select(props) {
   const {
      name,
      type = "text",
      hideInput,
      required,
      placeholder,
      className,
      options
   } = props;

   const listOptions = options.map(function(option) {
      return <option value={option.value} label={option.label}></option>
   });

   return (
      <div>
         <select name={name}
            type={type}
            hideInput={hideInput}
            required={required}
            placeholder={placeholder}
            className={className}
            options={options}>
               {listOptions}
         </select>
         <br/>
      </div>

   )
}

export default Select;