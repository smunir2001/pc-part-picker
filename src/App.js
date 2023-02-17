import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar className='navbar'/>
      <Home />
    </>
  );
}

export default App;