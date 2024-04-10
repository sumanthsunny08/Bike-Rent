import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {One} from './components/one/One'
import {Two} from './components/two/Two'
import {Three} from './components/three/Three'
import {Four} from './components/four/Four'
import {Five} from './components/five/Five'
import {Six} from './components/six/Six'
import {Seven} from './components/seven/Seven'
import {Threetwo} from './components/threetwo/Threetwo.js'
import React, {useState} from 'react';

function App() {
  const [show,setshow]=useState(true);
  const [cart,setcart]=useState([]);

  const handleClick=(item)=>{
    let ispresent=false;
    cart.forEach(element => {
        if(element.id==item.id)
        {
          ispresent=true;
        }
    })
    setcart([...cart,item]);
  }

  return (
    <div className="App">
      <One></One>
      <Two></Two>
      {
      show?<Three handleClick={handleClick} setshow={setshow} ></Three>:<Threetwo cart={cart} setshow={setshow} setcart={setcart}></Threetwo>
      }
      <Four></Four>
      <Six></Six>
      <Seven></Seven>
    </div>
  );
}

export default App;
