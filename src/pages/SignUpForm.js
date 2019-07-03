import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignUpForm extends Component {
    render(){
        return(
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label"htmlfor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter full name here" name="name"/>
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="name">Username</label>
              <input type="text" id="username" className="FormField__Input" placeholder="Enter username here" name="name"/>
              </div>
              
              
              <div className="FormField">
              <label className="FormField__Label"htmlfor="password">Password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="Enter password here" name="password"/>
              
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="email">Email</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter email here" name="email"/>

              </div>

              <div className="FormField">
              <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="isHelper"/> I am signing up to be a DietDiet 
              <a href=""className="FormField__TermsLink"> helper</a>
              </label>    
              </div>

            <div className="FormField">
              <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/> I have read and agreed to the 
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
