import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from "react";
import About from './components/About';

function App() {
 return (
    <div className='pt-20 overflow-hidden'>
        <Header></Header>
        <About></About>
    </div> 
  );
}

export default App;
