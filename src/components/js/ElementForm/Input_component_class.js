import React from "react";
import '../../css/input_component.css';

class InputClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {_value: ''};
   }

   handleChange = (event) => {
      this.setState({_value:event.target.value});
      if (this.props.onChange) {
         this.props.onChange(event);
      }
   }

   render() {
      const {
         className,
         placeholder,
         name,
         type,
         value
      } = this.props;

      return (
         <input type={type}
            className={className}
            placeholder={placeholder}
            value={typeof value !== "undefined" ? value : this.state._value}
            onChange={this.handleChange}
            name={name} />
      );
   }
}

export default InputClass;

