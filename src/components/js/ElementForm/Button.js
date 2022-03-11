function Button(props) {

   return (
      <button onClick={props.onClick}
         index_item={props.index_item}
         className={props.className}
         name={props.name}>
         {props.text}
         <br/>
         {props.info}
      </button>
   )
}

export default Button;