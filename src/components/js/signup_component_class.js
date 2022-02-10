import React from "react";
import InputClass from "./ElementForm/Input_component_class";

const initialState = {
   name: '',
   email: '',
   password: '',
   confirm_password: ''
};

class SignupClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
   }

   resetSubmit = () => {
      console.log(initialState);
      this.setState(initialState);
      console.log(this.state);
   }

   onSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      this.resetSubmit();
   }

     
   render() {
      return (
         <form onSubmit={this.onSubmit}>
            <InputClass
               className="login_class"
               type="text"
               value={this.state.name}
               onChange={this.handleChange}
               name="name" />
            <br />
            <InputClass
               className="login_class"
               type="email" value={this.state.email}
               onChange={this.handleChange}
               name="email" />
            <br />
            <InputClass 
               className="login_class"
               type="password"
               value={this.state.password}
               onChange={this.handleChange}
               name="password" />
            <br />
            <InputClass 
               className="login_class"
               type="password"
               value={this.state.confirm_password}
               onChange={this.handleChange}
               name="confirm_password" />
            <br />
            <button type="submit" className="login_press">Login</button>
         </form>
      );

   }
}

export default SignupClass;

