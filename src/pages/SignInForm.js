import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignInForm extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({[name]:value});
}

handleSubmit(e){
  e.preventDefault();

  console.log('The form was submitted with following data:');
  console.log(this.state);
}


    render(){
        return(
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label"htmlfor="email">Email/Username</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter email/username here" name="email"
              value={this.state.email} onChange={this.handleChange}/>
              </div>

 
              <div className="FormField">
              <label className="FormField__Label"htmlfor="password">Password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="Enter password here" name="password"
              value={this.state.password} onChange={this.handleChange}/>
              </div>

            

            <div className="FormField">
              <button className="FormField__Button mr-30">Log In</button><Link exact to="/"
              className="FormField__Link">Register an account</Link>
              </div>
              </form>
             </div>
         );

     }

}

export default SignInForm;
