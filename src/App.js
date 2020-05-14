import React, {Component} from 'react';

import './App.css';
import Popup from 'reactjs-popup'
import DietDietLogo from '../src/DietDietLogo.jpg'
import Nut from '../src/duncandoughnuts2.png'

import { BrowserRouter as Router, Route, Link, NavLink } from  'react-router-dom'
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import CafesPage from './pages/CafesPage';

import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './Actions/AuthAction';
class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <div className="App__Aside">
          <img src={Nut} alt=" "/>
        </div>
        <div className="App__Form">
        <div className="PageSwitcher">
          <NavLink to ="/sign-in" activeClassName="PageSwitcher__Item--Active"
           className="PageSwitcher__Item">Sign In</NavLink>
          <NavLink exact to ="/" activeClassName="PageSwitcher__Item--Active"
           className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

          <div className="FormTitle">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>or
            <NavLink exact to="/"activeClassName="FormTitle__Link--Active" 
            className="FormTitle__Link FormTitle">Sign Up</NavLink>
          </div>
    
          <Route exact path="/" component={SignUpForm}>
            </Route>

          <Route path="/sign-in" component={SignInForm}>
          </Route>

          <Route path ="/home" component={CafesPage}>
          </Route>

          </div>
        </div>
        </Provider>
    </Router>
  );
  }
}


export default App;