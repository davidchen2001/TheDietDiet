import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../actions/AuthAction";
import { clearErrors } from "../../actions/ErrorAction";

import Alert from "../../components/Alert/Alert";
import "./AuthenticationForm.css";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
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
    this.setState({ [e.target.name]: e.target.value });
    console.log("Something changed on login");
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      emailAddress: this.state.email,
      password: this.state.password,
    };

    this.props.login(newUser);
    this.setState({ msg: "Logged In" });
    console.log("Signed In");
  }

  render() {
    const msg = this.state.msg;

    return (
      <div className="Auth">
        <Paper elevation={3} className="Auth__Form">
          <form className="FormField" onSubmit={this.onSubmit}>
            {msg === "Logged In!" ? (
              <Alert
                color="success"
                text={JSON.stringify(msg)}
              ></Alert>
            ) : null}

            {msg && msg !== "Logged In!" ? (
              <Alert
                color="error"
                text={JSON.stringify(msg)}
              ></Alert>
            ) : null}

            <Typography className="FormTitle" variant="h2">
              Login
            </Typography>

            <TextField
              className="FormField__Input"
              name="email"
              label="Email"
              TextField
              id="outlined-basic"
              variant="outlined"
              margin="normal"
              id="email"
              onChange = {this.onChange}
            />

            <TextField
              className="FormField__Input"
              variant="outlined"
              TextField
              id="outlined-basic"
              label="Password"
              id="standard-password-input"
              margin="normal"
              type="password"
              name = "password"
              onChange={this.onChange}
            />

            <div className="FormField">
              <button className="FormField__Button mr-30">Log In</button>
              <Link exact to="/sign-up" className="FormField__Link">
                Register an account
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

export default connect(mapStateToProps, { login, clearErrors })(SignInForm);
