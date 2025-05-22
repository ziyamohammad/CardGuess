
import { useState } from 'react';
import './App.css';
import GameOver from './components/GameOver';
import Min from './components/Min';
import { BrowserRouter as Router,Routes,Route } from 'react-router';



function App() {
  const[moves,setMoves]=useState();
  const handlepass = (moves)=>{
    setMoves(moves)
  }
 return(
  <div className = "Main">
    <Router>
   <Routes>
     <Route path ="/" element={<Min handlepass = {handlepass}/>}/>
    <Route path ="/gameover" element={<GameOver moves={moves}/>}/>
   </Routes>
   </Router>
  </div>
 )
}

export default App;
