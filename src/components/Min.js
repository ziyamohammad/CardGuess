import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Min = ({handlepass}) => {
  const [flipped, setFlipped] = useState([]);
  const [start, setStart] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [images, setImages] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score,SetScore]=useState(0);
  const[moves,setMoves]=useState(0)
  const navigate = useNavigate();
  const[username,setUsername] = useState("");

  

  const handleflip = (index) => {
    if(username===""){
      alert("please enter gamer name");
    }
  setMoves(moves + 1);
  if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) return;

  const newFlipped = [...flipped, index];
  setFlipped(newFlipped);

  if (newFlipped.length === 2) {
    const [firstIndex, secondIndex] = newFlipped;
    const firstImage = images[firstIndex];
    const secondImage = images[secondIndex];

    const firstImg = new Image();
    const secondImg = new Image();
    let loaded = 0;

    const checkMatch = async () => {
  loaded++;

  if (loaded === 2) {
    if (firstImage === secondImage) {
      const newMatched = [...matched, firstIndex, secondIndex];
      setMatched(newMatched);
      SetScore((prev) => prev + 1000);

      if (newMatched.length === images.length) {
        // ✅ Show the final matched cards for 1s
        setTimeout(() => {
          navigate("/gameover"); // Redirect after showing last flip
          handlepass(moves);

          // 🔁 Fire-and-forget API call
          axios.post('https://cardguess-backend.onrender.com/api/v1/user/moves', {
            moves: parseInt(moves),
            username: username
          }).then(res => console.log("Submitted moves:", res.data))
            .catch(err => console.error("Failed to submit moves", err));
        }, 1000);

        return; // Don't reset flipped manually
      }
    }

    // 🔄 Reset flipped cards if not a match or game not over
    setTimeout(() => {
      setFlipped([]);
    }, 1000);
  }
};


    firstImg.onload = checkMatch;
    secondImg.onload = checkMatch;
    firstImg.src = firstImage;
    secondImg.src = secondImage;
  }
};

  const handlestart = async () => {
    setStart(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=10`);
      const imgList = response.data.map(img => img.download_url);

     
      const pairedImages = [...imgList, ...imgList];
      const shuffled = pairedImages
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setImages(shuffled);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setShowStart(false);
      }, 1000);
    }
  }, [start]);

  return (
    <>
      {showStart && (
        <div className="start">
          <div className={`half ${start ? "halfani" : ""}`}></div>
          <button className={start ? "nostart" : "startgame"} onClick={handlestart}>
            Start
          </button>
          <div className={`half2 ${start ? "halfani2" : ""}`}></div>
        </div>
      )}

      <div className={`App ${!showStart ? "visible" : ""}`}>
      
        <h1>Flip 'n' Guess</h1>
        <div className="head">
          <h2>Choose The Cards</h2>
         <div className="mainbox">
  {[0, 1, 2, 3].map((row) => (
    <div className="row" key={row}>
      {[0, 1, 2, 3, 4].map((col) => {
        const index = row * 5 + col;
        return (
          <div className="card" key={index} onClick={() => handleflip(index)}>
            <div
  key={index}
  className={flipped.includes(index) || matched.includes(index) ? "c" : "cflip"}
  onClick={() => handleflip(index)}
  style={
    (flipped.includes(index) || matched.includes(index)) && images[index]
      ? { backgroundImage: `url(${images[index]})`, backgroundSize: 'cover' }
      : {}
  }
/>

          </div>
        );
      })}
    </div>
  ))}
  <form>
   <input type="text" className="fg" value={username} placeholder="Enter Gamer Name" onChange={(e)=>{setUsername(e.target.value)}}/></form>
    <div className="gameinfo">
         
          <span className="score">Score = {score}</span>
           <span className="moves">Moves = {moves}</span>
        </div>
</div>

        </div>
      </div>
    </>
  );
}

export default Min
