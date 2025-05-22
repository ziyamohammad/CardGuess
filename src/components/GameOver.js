import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GameOver = ({ moves }) => {
  const [highestScore, setHighestScore] = useState([]);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await axios.get('https://cardguess-backend.onrender.com/api/v1/user/getmoves');
        const sortedLeaders = response.data.data.sort((a, b) => a.moves - b.moves);
        setHighestScore(sortedLeaders)
        console.log(highestScore)
      } catch (error) {
        console.error('Error fetching moves:', error);
      }
    };

    fetchMoves();
  }, [moves]);

  return (
    <div className="gameover">
      <h1 className="gm">Game Over</h1>
      <div className="table">
         <div className="rowleaders">
           <span className='scoreh'>Position</span>
              <span className='nameh'>Username</span>
               <span className='movesh'>Moves</span>
               
          </div>
        {highestScore.map((leader,index)=>{
          return(
            <div className="rowleaders" key={leader._id || index} >
               <span className='score'>{index+1}</span>
              <span className='name'>{leader.username}</span>
               <span className='moves'>{leader.moves}</span>
               
              
            </div>
          )
        })}
      </div>
     
    </div>
  );
};

export default GameOver;
