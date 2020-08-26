import React, {Component} from 'react';
import './App.css';
import Nut from '../src/assets/DietDietLogo.png'

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from  'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import SignInForm from './pages/AuthPage/SignInForm';
import SignUpForm from './pages/AuthPage/SignUpForm';
import CafesPage from './pages/CafesPage';
import UploadPage from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
    
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/AuthAction';

class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Router>
    {this.props.children}
      <Provider store={store}>

          <Switch>
          <Route exact path="/" component={HomePage}>
            </Route>

          <Route exact path = "/sign-up" component = {SignUpForm}>

          </Route>

          <Route exact path="/sign-in" component={SignInForm}>
          </Route>

          <Route exact path ="/home" component={CafesPage}>
          </Route>

          <Route exact path ="/upload" component={UploadPage}>
          </Route>

          <Route exact path ="/profile" component={ProfilePage}>
          </Route>

          </Switch>
        </Provider>
    </Router>
  );
  }
}

export default App;
