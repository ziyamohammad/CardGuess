
import './App.css';
import GameOver from './components/GameOver';
import Min from './components/Min';
import { BrowserRouter as Router,Routes,Route } from 'react-router';



function App() {
 return(
  <div className = "Main">
    <Router>
   <Routes>
     <Route path ="/" element={<Min/>}/>
    <Route path ="/gameover" element={<GameOver/>}/>
   </Routes>
   </Router>
  </div>
 )
}

export default App;
