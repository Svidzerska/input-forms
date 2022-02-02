import React from "react";
import InputClass from "./input_component_class";
import './login_component_class.css';

class LoginClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {login: '',
                    password: ''};

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   handleChange(event) {
      console.log(event);
      this.setState({[event.target.name]: event.target.value});
   }

   onSubmit(event) {
      event.preventDefault();
      console.log(this.state);
   }
  
   render() {
     return <form onSubmit={this.onSubmit}> 
         <InputClass className="login_class" type="text" onChange={this.handleChange} name="login"/>
        <br/>
        <InputClass className="login_class" type="password" onChange={this.handleChange} name="password"/>
        <br/>
        <button type="submit" className="login_press">Login</button>
     </form>;
      
   }
}

export default LoginClass;

