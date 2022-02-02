import React from "react";
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
      this.setState({[event.target.name]: event.target.value});
   }

   onSubmit(event) {
      event.preventDefault();
      console.log(this.state);
   }
  
   render() {
     return <form onSubmit={this.onSubmit}> 
        <input className="login_class" type="text" value={this.state.login} onChange={this.handleChange} name="login"/>
        <br/>
        <input className="login_class" type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
        <br/>
        <button type="submit" className="login_press">Login</button>
     </form>;
      
   }
}

export default LoginClass;

