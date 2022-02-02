import React from "react";
import './input_component_class.css';

class InputClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }
  
   render() {
     return <input placeholder="classes" value={this.state.value} onChange={this.handleChange} name={this.props.name}/>;
   }
}

export default InputClass;

