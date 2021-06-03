import React from 'react';
import logo from './logo.png';
import './App.css';
import PalindromeChecker from './components/PalindromeChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PalindromeChecker/>
    </div>
  );
}

export default App;
