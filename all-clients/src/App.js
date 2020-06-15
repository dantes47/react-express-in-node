import React from 'react';
import logo from './logo.svg';
import Clients from './components/clients/clients';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome!</h1>
      </header>
      <Clients />
    </div>
  );
}

export default App;
