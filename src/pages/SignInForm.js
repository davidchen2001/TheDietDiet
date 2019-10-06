import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { signIn } from './ClientFunctions.js';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import { signUp } from './ClientFunctions.js';
import { login } from '../Actions/AuthAction'; 
import { clearErrors } from '../Actions/ErrorAction';
//import { REGISTER_FAIL } from '../Actions/types.js';
import { Alert } from 'reactstrap';

class SignInForm extends Component {
  constructor(){
    super();
    this.state={
      emailAddress:'',
      password:''
  };
  
  //this.handleChange = this.handleChange.bind(this);
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

/*handleChange(e){
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({[name]:value});
}*/

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
      //this.props.clearErrors();
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
    //name: this.state.name,
    //username: this.state.username,
    emailAddress: this.state.email,
    password: this.state.password,
    /*
    memberStatus: this.state.memberStatus,
    helperStatus: this.state.helperStatus,
    homeHelper: this.state.homeHelper,
    workHelper: this.state.workHelper,
    helperType: this.state.helperType,
    memberBeingHelped: this.state.memberBeingHelped, */
  }

  this.props.login(newUser);
  console.log("Signed In")
}

    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.onSubmit}>

            {this.state.msg ? (
              <Alert color = "danger" >{JSON.stringify(this.state.msg)}</Alert>
              ) : null}

            <div className="FormField">
              <label className="FormField__Label"htmlFor="email">Email/Username</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter email/username here" name="email"
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

