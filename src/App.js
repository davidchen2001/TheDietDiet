import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup'
import Amplify from 'aws-amplify';


const Greetings = (props) => <div> Howdy! {props.first} {props.last}!</div>;


function App() {
  return (
    <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">
      <div className="PageSwitcher">
        <a href="#" className="PageSwitcher__Item">Sign In Here</a>
        <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up Here</a>
          </div>

        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">Sign In</a>or<a href="#"
          className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
        </div>

        <div className="FormCenter">
            <div className="FormField">
              <label className="FormField__Label"htmlfor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter full name here" name="name"/>
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="password">Password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="Enter password here" name="password"/>
              </div>

              <div className="FormField">
              <label className="FormField__Label"htmlfor="email">Email</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter email here" name="email"/>
              </div>

          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/> I have read and agreed to the 
            <a href=""className="FormField__TermsLink"> terms of service</a>
            </label>    
 

            <div className="FormField">
              <button className="FormField__Button mr-30"> Sign up</button><a href="#"
              className="FormField__Link">I'm already a member</a>
              </div>

          </div>
        
       

        </div>
    </div>
  );

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