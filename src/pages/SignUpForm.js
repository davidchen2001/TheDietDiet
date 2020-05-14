import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../Actions/AuthAction';
import { clearErrors } from '../Actions/ErrorAction';

import AlertComponent from './Components/AlertComponent';

class SignUpForm extends Component {
  constructor(){
    super();
    this.state={
      name: '',
      username: '',
      emailAddress: '',
      password: '',
      errors: {}
  };

  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

static propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

componentDidUpdate(prevProps) {
  
  const { error } = this.props;
  if (error !== prevProps.error) {
    if(error.id === 'REGISTER_FAIL') {
      this.setState({ msg: error.msg }); 
      
    } else {
      this.setState({ msg: null });
      //this.props.clearErrors();
    }
  }

}

toggle = () => {
  this.props.clearErrors();
}; 


onChange(e) {
  this.setState({ [e.target.name]: e.target.value })
  console.log("Something changed on register");

  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({[name]:value});

}
onSubmit(e) {
  e.preventDefault()
  

  const newUser = {
    name: this.state.name,
    username: this.state.username,
    emailAddress: this.state.emailAddress,
    password: this.state.password,
    isHelper: this.state.isHelper
    
  }

  this.props.register(newUser);
  
  this.state.msg = "Successfully Registered!"
  console.log("Signed Up")
  console.log('The form was submitted with following data:');
  console.log(this.state);
  
}

render(){
  const msg = this.state.msg;

  return(
    <div className="FormCenter">
      <form className="FormFields" onSubmit={this.onSubmit}>

      {msg === "Successfully Registered!"? (
      <AlertComponent color = 'success' text = {JSON.stringify(msg)}></AlertComponent>
      ) : null }

      {msg && msg !== "Successfully Registered!"? (
      <AlertComponent color = 'danger' text = {JSON.stringify(msg)}></AlertComponent>
      ) : null }

      <div className="FormField">
      <label className="FormField__Label"htmlFor="name">Name</label>
      <input type="text" id="name" className="FormField__Input" placeholder="Enter full name here" name="name" value={this.state.name} onChange={this.onChange} />
      </div>

      <div className="FormField">
      <label className="FormField__Label"htmlFor="name">Username</label>
      <input type="text" id="username" className="FormField__Input" placeholder="Enter username here" name="username" value={this.state.username} onChange={this.onChange}/>
      </div>
      
      
      <div className="FormField">
      <label className="FormField__Label"htmlFor="password">Password</label>
      <input type="password" id="password" className="FormField__Input" placeholder="Enter password here" name="password" value={this.state.password} onChange={this.onChange}/>
      </div>

      <div className="FormField">
      <label className="FormField__Label"htmlFor="email">Email</label>
      <input type="email" id="email" className="FormField__Input" placeholder="Enter email here" name="emailAddress" value={this.state.emailAddress} onChange={this.onChange}/>
      </div>

      <div className="FormField">
      <label className="FormField__CheckboxLabel">
      <input className="FormField__Checkbox" type="checkbox" name="isHelper" value = {this.state.isHelper} onChange = {this.onChange} /> I am signing up to be a DietDiet 
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
      <button className="FormField__Button mr-30" > Sign up</button><Link to="/sign-in"
      className="FormField__Link">I'm already a member</Link>
      </div>
      </form>
  </div>
);

}

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
{ register, clearErrors }
)(SignUpForm);