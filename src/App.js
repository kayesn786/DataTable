import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from './Login';
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
