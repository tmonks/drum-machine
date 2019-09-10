import React, { useState, useEffect } from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";
import DrumPad from "./DrumPad";

export default function App() {
  const [keyPressed, setKeyPressed] = useState("None");
  const [hit, setHit] = useState(false);
  const [drumHits, setDrumHits] = useState({
    Q: false,
    W: false,
    E: false,
    A: false,
    S: false,
    D: false,
    Z: false,
    X: false,
    C: false
  });
  const [currentBank, setCurrentBank] = useState(0);

  const handleKeyPress = e => {
    setKeyPressed(e.keyCode);

    if (e.keyCode === 88) {
      setHit(true);
    }
  };

  const handleKeyUp = e => {
    console.log("key up: " + e.keyCode);
    setHit(false);
  };

  const handleMouseDown = letter => {
    setHit(true);
    console.log("Mouse down on " + letter);
  };

  const handleMouseUp = letter => {
    setHit(false);
    console.log("Mouse up on " + letter);
  };

  useEffect(() => {
    console.log("Adding event listeners...");
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyUp, false);

    return () => {
      console.log("Cleaning up...");
      document.removeEventListener("keydown", handleKeyPress, false);
      document.removeEventListener("keyup", handleKeyUp, false);
    };
  }, []);

  return (
    <div>
      <ReactFCCTest />
      <div id="drum-machine">
        <div id="display">Hit? {hit ? "Yes" : "No"}</div>
        <div className="drum-pad">Q</div>
        <div className="drum-pad">W</div>
        <div className="drum-pad">E</div>
        <div className="drum-pad">A</div>
        <div className="drum-pad">S</div>
        <div className="drum-pad">D</div>
        <DrumPad
          hit={hit}
          mouseDownHandler={handleMouseDown}
          mouseUpHandler={handleMouseUp}
          letter="Z"
        />
        <DrumPad
          hit={hit}
          mouseDownHandler={handleMouseDown}
          mouseUpHandler={handleMouseUp}
          letter="X"
        />
        <DrumPad
          hit={hit}
          mouseDownHandler={handleMouseDown}
          mouseUpHandler={handleMouseUp}
          letter="C"
        />
      </div>
    </div>
  );
}
