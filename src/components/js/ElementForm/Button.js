function Button(props) {

   return (
      <button onClick={props.onClick} item_number={props.item_number}>{props.text}</button>
   )
}

export default Button;