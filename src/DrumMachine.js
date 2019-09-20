import React, { useState, useEffect } from "react";
import "./DrumMachine.scss";
import ReactFCCTest from "react-fcctest";
import BankSelector from "./BankSelector";
import DrumPad from "./DrumPad";
import drumPadConfig, { bankList } from "./drumPadConfig";

export default function DrumMachine() {
  const [display, setDisplay] = useState("");
  const [drumHits, setDrumHits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const [currentBank, setCurrentBank] = useState(0);

  // given a letter, find the drumPadID (index) of the drumPad
  const letterToDrumPad = letter => {
    return drumPadConfig.findIndex(x => {
      return x.id === letter;
    });
  };

  const hitDrumPad = (drumPadID, hit) => {
    // confirm the drumPadID is valid for updating state
    if (drumPadID >= 0 && drumPadID < drumHits.length) {
      const updatedDrumHits = [...drumHits];
      updatedDrumHits[drumPadID] = hit;
      setDrumHits(updatedDrumHits);
      setDisplay(drumPadConfig[drumPadID].samples[0].name);
    }
  };

  // if a drumPad is clicked, mark it as hit
  const handleMouseDown = drumPadID => {
    hitDrumPad(drumPadID, true);
  };

  // if a drumPad is clicked, mark it as not hit
  const handleMouseUp = drumPadID => {
    hitDrumPad(drumPadID, false);
  };

  const handleClickRight = () => {
    setCurrentBank((currentBank + 1) % bankList.length);
  };

  const handleClickLeft = () => {
    setCurrentBank((currentBank + bankList.length - 1) % bankList.length);
  };

  useEffect(() => {
    // if one of keys for a drumPad is pressed, hit the drum pad
    const handleKeyDown = e => {
      const drumPadID = letterToDrumPad(String.fromCharCode(e.keyCode));
      // confirm the drumPad was found
      if (drumPadID >= 0) {
        hitDrumPad(drumPadID, true);
      }
    };

    // if one of the keys for a drumPad is released, release the drum pad
    const handleKeyUp = e => {
      const drumPadID = letterToDrumPad(String.fromCharCode(e.keyCode));
      // confirm the drumPad was found
      if (drumPadID >= 0) {
        hitDrumPad(drumPadID, false);
      }
    };

    console.log("Adding event listeners...");
    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);

    return () => {
      console.log("Cleaning up...");
      document.removeEventListener("keydown", handleKeyDown, false);
      document.removeEventListener("keyup", handleKeyUp, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ReactFCCTest />
      <div id="drum-machine">
        <div className="title">SOUND MACHINE</div>
        <BankSelector
          clipName=""
          currentBank={bankList[currentBank]}
          clickRightHandler={handleClickRight}
          clickLeftHandler={handleClickLeft}
        />
        <div id="display" className="display">
          {display}
        </div>
        {drumPadConfig.map((drumPad, index) => {
          return (
            <DrumPad
              hit={drumHits[index]}
              mouseDownHandler={handleMouseDown}
              mouseUpHandler={handleMouseUp}
              letter={drumPad.id}
              drumPadID={index}
              key={index}
              clip={drumPad.samples[0].file}
            />
          );
        })}
      </div>
    </div>
  );
}
