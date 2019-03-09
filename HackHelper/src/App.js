import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/start">Get Started</Link>
      </div>
    );
  };
}

export default App;
