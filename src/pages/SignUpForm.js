import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SignUpForm extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      name:'',
      hasAgreed: false,
      isHelper: false
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
              <label className="FormField__Label"htmlfor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter full name here" name="name"
               value={this.state.name} onChange={this.handleChange}/>
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="name">Username</label>
              <input type="text" id="username" className="FormField__Input" placeholder="Enter username here" name="username"
              value={this.state.username} onChange={this.handleChange}/>
              </div>
              
              
              <div className="FormField">
              <label className="FormField__Label"htmlfor="password">Password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="Enter password here" name="password"
              value={this.state.password} onChange={this.handleChange}/>
              
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="email">Email</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter email here" name="email"
              value={this.state.email} onChange={this.handleChange}/>

              </div>

              <div className="FormField">
              <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="isHelper" value={this.state.isHelper} onChange={this.handleChange}/> I am signing up to be a DietDiet 
              <a href=""className="FormField__TermsLink"> helper</a>
              </label>    
              </div>

            <div className="FormField">
              <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/> I have read and agreed to the 
              <a href=""className="FormField__TermsLink"> terms of service</a>
              </label>    
              </div>

            <div className="FormField">
              <button className="FormField__Button mr-30"> Sign up</button><Link to="/sign-in"
              className="FormField__Link">I'm already a member</Link>
              </div>
              </form>
          </div>
        );

    }

}

export default SignUpForm;
