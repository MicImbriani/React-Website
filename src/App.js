import React from 'react';
import './App.css';
import Navbar from './Navbar';
import './styles.css'
import Pricing from './Pricing';
import About from './About';
import Home from './Home';


function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/pricing":
      Component = Pricing
      break
    case "/about":
      Component = About
      break
  }
  return (
    <>
      <Navbar />
      <div className='container'><Component /></div>
    </>
  )
}

export default App;
