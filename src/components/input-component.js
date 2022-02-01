import React from "react";

class InputFirst extends React.Component {
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

export default InputFirst;

