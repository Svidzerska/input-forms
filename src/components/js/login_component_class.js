import React from "react";
import InputClass from "./input_component_class";
import '../css/login_component.css';
import Api from "../control/Api";

const initialResult = {
   information:"",
   current_user:""
}

const initialValues = {
   login: '',
   password: ''
}

class LoginClass extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         values: initialValues,
         isType: false,
         isResult: initialResult,
         isSubmit: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.isAuth = this.isAuth.bind(this);
      this.currentUser = this.currentUser.bind(this);
   }

   handleChange(event) {
      this.setState({
         values: {...this.state.values, [event.target.name]: event.target.value},
         isSubmit: false,
         isResult: {
            information: "",
            current_user: ""
         }
      }, () => {
         console.log(this.state);

         if (this.state.values.login && this.state.values.password) {
            this.setState({
               isType: true
            });
         } else {
            this.setState({
               isType: false
            });
         }
      }
      );
   }

   componentDidMount() {
      console.log(this.state.values);
      if (this.state.values.login && this.state.values.password) {
      Api.login(this.state.values).then((result) =>  {
         console.log(result);
         this.setState({
            isResult: {
               information: result.information,
               current_user: result.current_user
            }
         }, () => {
            if (this.state.isResult.information === "log-in is successed") {
               this.isAuth();
               if(this.state.isResult.current_user !== "") {
                  this.currentUser();
               }
            }
         })
      });
      }
      this.setState({
         isSubmit: true,
         isType: false
      });
      console.log(this.state);
   }


   isAuth() {
      this.props.updateData(this.values);
   }

   currentUser() {
      this.props.updateUser(this.state.isResult.current_user);
   }

   onSubmit(event) {
      event.preventDefault();
      this.componentDidMount();
   }
  
   render() {
      return (
         <div className="form_login">
            <form onSubmit={this.onSubmit}>
               <span className="name_of_input">Your name</span><br />
               <InputClass className="login_input" type="text" onChange={this.handleChange} name="login" />
               <br />
               <span className="name_of_input">Your password</span><br />
               <InputClass className="login_input" type="password" onChange={this.handleChange} name="password" />
               <br />
               <button type="submit" className={this.state.isType ? "valid_submit" : "unvalid"}>Login</button>
            </form>
            <div className={(this.state.isSubmit && this.state.values.login && this.state.values.password) ? "animate_progress" : "stop"}><p></p></div>
            <p className="login_information">
               {this.state.isResult.information}
            </p>
         </div>
      );

   }
}

export default LoginClass;

