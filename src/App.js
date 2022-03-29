import './App.css';
import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-555" />
        <Contact name="Henry Do" email="doe@gmail.com" phone="444-555-555" />
      </div>
    );
  }
}

export default App;
