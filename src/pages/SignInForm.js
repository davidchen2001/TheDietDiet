import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../actions/AuthAction'; 
import { clearErrors } from '../actions/ErrorAction';

import AlertComponent from './components/AlertComponent'

class SignInForm extends Component {
  constructor(){
    super();
    this.state={
      emailAddress:'',
      password:''
  };
  
  
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

static propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

componentDidUpdate(prevProps) {
  
  const { error } = this.props;
  if (error !== prevProps.error) {
    if(error.id === 'LOGIN_FAIL') {
      this.setState({ msg: error.msg }); 

    } else {
      this.setState({ msg: null });
    }
  }

}

toggle = () => {
  this.props.clearErrors();
}; 


onChange(e) {
  this.setState({ [e.target.name]: e.target.value })
  console.log("Something changed on login");
}
onSubmit(e) {
  e.preventDefault()

  const newUser = {
    emailAddress: this.state.email,
    password: this.state.password,
    
  }

  this.props.login(newUser);
  this.setState({msg: "Logged In"})
  console.log("Signed In")
}

    render(){
      const msg = this.state.msg 

        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.onSubmit}>

            {msg === "Logged In!" ? (
            <AlertComponent color = "success" text = {JSON.stringify(msg)}></AlertComponent>
            ) : null }

            {msg && msg !== "Logged In!"? (
            <AlertComponent color = 'danger' text = {JSON.stringify(msg)}></AlertComponent>
            ) : null }

            <div className="FormField">
              <label className="FormField__Label"htmlFor="email">Email</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter email here" name="email"
              value={this.state.email} onChange={this.onChange}/>
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter password here" name="password"
              value={this.state.password} onChange={this.onChange}/>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(SignInForm);
