function Button(props) {

   return (
      <button onClick={props.onClick} index_item={props.index_item}>{props.text}</button>
   )
}

export default Button;