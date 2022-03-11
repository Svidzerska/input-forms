function Select(props) {
   const {
      name,
      type = "text",
      hideInput,
      required,
      placeholder,
      className,
      options,
      size,
      onChange
   } = props;

   const listOptions = options.map(function(option) {
      return <option value={option.value} label={option.label}></option>
   });

   return (
      <div className={className}>
         <select name={name}
            type={type}
            hideInput={hideInput}
            required={required}
            placeholder={placeholder}
            className={className + "__select_element"}
            options={options}
            size={size}
            onChange={onChange}>
               {listOptions}
         </select>
         <br/>
      </div>

   )
}

export default Select;