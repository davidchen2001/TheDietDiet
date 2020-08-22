import React, {Component} from 'react';
import './App.css';
import Nut from '../src/assets/DietDietLogo.png'

import { BrowserRouter as Router, Route, Link, NavLink } from  'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
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
      <div className="App">
        
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

          
        </div>
        </Provider>
    </Router>
  );
  }
}

export default App;



  /*
  const PopupExample =  () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div><Greetings first="John" last="Smith" /></div>
    </Popup>
  )
        <header className="App-header">
          
           
          <Greetings first="John" last="Smith" />
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Learn React
          </a>
        </header>


          <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label"htmlfor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter full name here" name="name"/>
              </div>
            </form>
          </div>

        */
