import { useEffect, useState } from "react";
import "./App.css";

const Boxes = () => {
  const [color, setColor] = useState([]);
  const [rightBox, setRightBox] = useState();
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    setRightBox(Math.floor(Math.random() * 4));
    console.log(rightBox);
  }

  function choseCorrectBox(index) {
    if (index === rightBox) {
      setWon(true);
      setLost(false);
    } else {
      setWon(false);
      setLost(true);
    }
    setClicked(true)
  }

  function restartGame() {
    setColor({
      a: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      c: Math.floor(Math.random() * 255),
      d: Math.floor(Math.random() * 255),
      e: Math.floor(Math.random() * 255),
      f: Math.floor(Math.random() * 255),
    });
    setRightBox(Math.floor(Math.random() * 4));
    setLost(false);
    setWon(false);
  }

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <>
      <div className="wrapper">
        {clicked ? (
          <div className="boxes__wrapper">
            <div className="boxes">
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.a, color?.c, color?.b)}`,
                }}
                onClick={() => choseCorrectBox(0)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.c, color?.b, color?.a)}`,
                }}
                onClick={() => choseCorrectBox(1)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.d, color?.e, color?.f)}`,
                }}
                onClick={() => choseCorrectBox(2)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.f, color?.d, color?.e)}`,
                }}
                onClick={() => choseCorrectBox(3)}
              ></div>
            </div>
          </div>
        ) : (
          <div className="boxes__wrapper">
            <div className="boxes">
              <div
                disabled={true}
                className="box"
                style={{
                  backgroundColor: `#${(color?.a, color?.c, color?.b)}`,
                }}
                onClick={() => choseCorrectBox(0)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.c, color?.b, color?.a)}`,
                }}
                onClick={() => choseCorrectBox(1)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.d, color?.e, color?.f)}`,
                }}
                onClick={() => choseCorrectBox(2)}
              ></div>
              <div
                className="box"
                style={{
                  backgroundColor: `#${(color?.f, color?.d, color?.e)}`,
                }}
                onClick={() => choseCorrectBox(3)}
              ></div>
            </div>
          </div>
        )}
        {won ? (
          <div>
            <h1>YOU WON!!!</h1>{" "}
            <button onClick={restartGame}>Restart game</button>
          </div>
        ) : (
          <></>
        )}
        {lost ? (
          <div>
            <h1>You lost :(</h1>{" "}
            <button onClick={restartGame}>Try again</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Boxes;
