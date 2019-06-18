import React from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup'


const Greetings = (props) => <div> Howdy! {props.first} {props.last}!</div>;

function App() {
  return (
    <div className="App">

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
    </div>
  );

}



export default App;
