import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';
import { Navbar,Container } from 'react-bootstrap';
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <Navbar bg = "dark" expand = "lg">
      <Container>
    <Navbar.Brand href="#home">
      <img
        src= "/images/dota-icon-8.jpg"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="AncientCounters Logo"
      />
    </Navbar.Brand>
  </Container>
        
         </Navbar>
      <header className="App-header">
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
