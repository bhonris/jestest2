import React from 'react';
import logo from './logo.png';
import './App.css';
import FizzBuzz from './components/FizzBuzz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FizzBuzz/>
    </div>
  );
}

export default App;
