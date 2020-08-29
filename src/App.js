import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <div className="app">
      {/* <h1>Let's Build an AIRBNB CLONE</h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
