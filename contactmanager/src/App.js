import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React (First Attemp)
        </a>
     
     
      </header>
     

      <div className="my_sample">
        <Contact />
      </div>

    </div>
  );
}

export default App;
