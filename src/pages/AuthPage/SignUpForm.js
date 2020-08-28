import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/AuthAction";
import { clearErrors } from "../../actions/ErrorAction";

import Alert from "../../components/Alert/Alert";
import "./AuthenticationForm.css";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      emailAddress: "",
      password: "",
      isHelper: false,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
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
    this.setState({ [e.target.name]: e.target.value });
    console.log("Something changed on register");

    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      username: this.state.username,
      emailAddress: this.state.emailAddress,
      password: this.state.password,
      isHelper: this.state.isHelper,
    };

    this.props.register(newUser);

    this.setState({ msg: "Successfully Registered" });
    console.log("Signed Up");
    console.log("The form was submitted with following data:");
    console.log(this.state);
  }

  render() {
    const msg = this.state.msg;

    return (
      <div className="Auth">
        <Paper elevation={3} className="Auth__Form">
          <form className="FormField" onSubmit={this.onSubmit}>
            {msg === "Successfully Registered!" ? (
              <Alert
                color="success"
                text={JSON.stringify(msg)}
              ></Alert>
            ) : null}

            {msg && msg !== "Successfully Registered!" ? (
              <Alert
                color="error"
                text={JSON.stringify(msg)}
              ></Alert>
            ) : null}

            <Typography className="FormTitle" variant="h2">
              Register
            </Typography>

            <TextField
              className="FormField__Input"
              variant="outlined"
              TextField
              id="outlined-basic"
              label="Name"
              id="name"
              name = "name"
              margin="normal"
              onChange={this.onChange}
              value = {this.props.value}
            />

            <TextField
              className="FormField__Input"
              variant="outlined"
              TextField
              id="outlined-basic"
              label="Username"
              id="username"
              name = "username"
              margin="normal"
              onChange={this.onChange}
            />

            <TextField
              className="FormField__Input"
              variant="outlined"
              TextField
              id="outlined-basic"
              label="Password"
              id="standard-password-input"
              name = "password"
              margin="normal"
              type="password"
              onChange={this.onChange}
            />

            <TextField
              className="FormField__Input"
              name="emailAddress"
              label="Email"
              TextField
              id="outlined-basic"
              variant="outlined"
              margin="normal"
              id="email"
              onChange={this.onChange}
            />

            <FormGroup col>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.isHelper}
                    onChange={this.onChange}
                    name="isHelper"
                  />
                }
                label="I am signing up to be a DietDiet Helper"
              />

              <FormControlLabel
                control={
                  <Checkbox onChange={this.onChange} name="termsOfService" />
                }
                label="I have read and agreed to the terms of service"
              />
            </FormGroup>

            <div className="FormField">
              <button className="FormField__Button mr-30"> Sign up</button>
              <Link to="/sign-in" className="FormField__Link">
                I'm already a member
              </Link>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm);
