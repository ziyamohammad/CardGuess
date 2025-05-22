import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GameOver = ({ moves }) => {
  const [highestScore, setHighestScore] = useState(null);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/getmoves');
        const movesList = response.data.moves;
        if (Array.isArray(movesList) && movesList.length > 0) {
          const minMoves = Math.min(...movesList);
          setHighestScore(minMoves);
        }
      } catch (error) {
        console.error('Error fetching moves:', error);
      }
    };

    fetchMoves();
  }, [moves]);

  return (
    <div className="gameover">
      <h1 className="gm">Game Over</h1>
      <h3>Your Score = {moves} moves</h3>
      <h3>
        Highest Score = {highestScore !== null ? `${highestScore} moves` : 'Loading...'}
      </h3>
    </div>
  );
};

export default GameOver;
