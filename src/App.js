import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[flipped,setFlipped]=useState([])
  const handleflip=(index)=>{
 
  if (flipped.includes(index)) {
    console.log(`Box ${index + 1} already flipped. Ignoring click.`);
    return;
  }
  console.log(`Flipping box ${index + 1}`);
  setFlipped([...flipped, index]);
  if(flipped.length===2){
    setFlipped([]);
  }
};

  
  return (
    <div className="App">
     <h1>Flip 'n' Guess</h1>
     <div className="head"><h2>Choose The Cards</h2>
     <div className="mainbox">
      <div className="row">
        <div className={flipped.includes(0)?"c":"cflip" } onClick={()=>handleflip(0)}></div>
        <div className={flipped.includes(1)?"c":"cflip"} onClick={()=>handleflip(1)}></div>
        <div className={flipped.includes(2)?"c":"cflip"} onClick={()=>handleflip(2)}></div>
        <div className={flipped.includes(3)?"c":"cflip"} onClick={()=>handleflip(3)}></div>
        <div className={flipped.includes(4)?"c":"cflip"} onClick={()=>handleflip(4)}></div>
      </div>
      <div className="row">
         <div className={flipped.includes(5)?"c":"cflip"} onClick={()=>handleflip(5)}></div>
        <div className={flipped.includes(6)?"c":"cflip"} onClick={()=>handleflip(6)}></div>
        <div className={flipped.includes(7)?"c":"cflip"} onClick={()=>handleflip(7)}></div>
        <div className={flipped.includes(8)?"c":"cflip"} onClick={()=>handleflip(8)}></div>
        <div className={flipped.includes(9)?"c":"cflip"} onClick={()=>handleflip(9)}></div>
      </div>
      <div className="row">
           <div className={flipped.includes(10)?"c":"cflip"} onClick={()=>handleflip(10)}></div>
        <div className={flipped.includes(11)?"c":"cflip"} onClick={()=>handleflip(11)}></div>
        <div className={flipped.includes(12)?"c":"cflip"} onClick={()=>handleflip(12)}></div>
        <div className={flipped.includes(13)?"c":"cflip"} onClick={()=>handleflip(13)}></div>
        <div className={flipped.includes(14)?"c":"cflip"} onClick={()=>handleflip(14)}></div>
      </div>
      <div className="row">
        <div className={flipped.includes(15)?"c":"cflip"} onClick={()=>handleflip(15)}></div>
        <div className={flipped.includes(16)?"c":"cflip"} onClick={()=>handleflip(16)}></div>
        <div className={flipped.includes(17)?"c":"cflip"} onClick={()=>handleflip(17)}></div>
        <div className={flipped.includes(18)?"c":"cflip"} onClick={()=>handleflip(18)}></div>
        <div className={flipped.includes(19)?"c":"cflip"} onClick={()=>handleflip(19)}></div>
      </div>

     </div>
     </div>
    </div>
  );
}

export default App;
