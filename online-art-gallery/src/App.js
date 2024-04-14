import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from '../src/Component/Header/header.js';
import Home from './Component/Home/home.js';
function App() {
  return (
    <Router className="App">
      <Header />
      <Home />
  </Router>
  );
}

export default App;