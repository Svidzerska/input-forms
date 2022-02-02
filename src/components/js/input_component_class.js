import React from "react";
import '../css/input_component_class.css';

class InputClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};
   }
   
   handleChange = (event) => {
      this.setState({value:event.target.value});

      if (this.props.onChange) {
         this.props.onChange(event);
      }
   }
  
   render() {
      const {
         className,
         placeholder,
         name,
         type
      } = this.props;
      
      return (
         <input type={type}
            className={className}
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.handleChange}
            name={name} />
      );
   }
}

export default InputClass;

