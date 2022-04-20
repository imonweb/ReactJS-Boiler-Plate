import React, { useState } from "react";
import './css/main.scss'
import logo from './images/logo.png';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
console.log(logo);

  return (
    <>
    <div className="container"> 
      <h1 className="heading"> <img src={logo}></img>Boilerplate ReactJS</h1>
      <button className="btn" onClick={increment}>Counter</button>
      {counter}
     
    </div>
    </>
  );
};

export default App;