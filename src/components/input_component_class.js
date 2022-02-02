import React from "react";
import './input_component_class.css';

class InputClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
   }
   
   handleChange(event) {
      this.props.onChange(event);
   }
  
   render() {
     return <input className={this.props.className} placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} name={this.props.name}/>;
   }
}

export default InputClass;

