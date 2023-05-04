import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState([]);
  const [startGame, setStartGame] = useState(true);
  const [rightBox, setRightBox] = useState();

  function generateColor() {
    setColor({
      a: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      c: Math.floor(Math.random() * 255),
      d: Math.floor(Math.random() * 255),
      e: Math.floor(Math.random() * 255),
      f: Math.floor(Math.random() * 255),
    });
    console.log(color);
    setRightBox(Math.floor(Math.random() * 4))
    console.log(rightBox);
  }

  function choseCorrectBox(index) {
    if (index === rightBox) {
      console.log("You won"); 
    } else {
      console.log("You lost"); 
    }
  }

  function start() {
    setStartGame(false);
  }

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <>
      <div className="boxes__wrapper">
        {startGame ? (
          <button onClick={start}>Start</button>
        ) : (
          <>
            <div
              className="box"
              style={{ backgroundColor: `#${(color?.a, color?.c, color?.b)}` }}
              onClick={() => choseCorrectBox(0)}
            ></div>
            <div
              className="box"
              style={{ backgroundColor: `#${(color?.c, color?.b, color?.a)}` }}
              onClick={() => choseCorrectBox(1)}
            ></div>
            <div
              className="box"
              style={{ backgroundColor: `#${(color?.d, color?.e, color?.f)}` }}
              onClick={() => choseCorrectBox(2)}
            ></div>
            <div
              className="box"
              style={{ backgroundColor: `#${(color?.f, color?.d, color?.e)}` }}
              onClick={() => choseCorrectBox(3)}
            ></div>
            <button onClick={generateColor}>generate</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
