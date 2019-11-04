import React, { useState, useEffect, useCallback } from "react";
// import ReactFCCTest from "react-fcctest";
import BankSelector from "./BankSelector";
import DrumPad from "./DrumPad";
import soundBanks from "./soundBanks";
import "./DrumMachine.scss";

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
  const drumPadLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  // Updates drumPadHits to mark the drumPadID as hit (true) or released (false)
  // Using useCallback so that it only gets updated when currentBank changes
  const hitDrumPad = useCallback(
    (drumPadID, hit) => {
      // confirm the drumPadID is valid for updating state
      if (drumPadID >= 0 && drumPadID < drumHits.length) {
        const updatedDrumHits = [...drumHits];
        updatedDrumHits[drumPadID] = hit;
        setDrumHits(updatedDrumHits);
        if (hit) {
          setDisplay(soundBanks[currentBank].samples[drumPadID].name);
        }
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentBank]
  );

  // cycle through the available soundBanks to the right (increment)
  const scrollBankRight = () => {
    setCurrentBank((currentBank + 1) % soundBanks.length);
    setDisplay("");
  };

  // cycle through the available soundBanks to the left (decrement)
  const scrollBankLeft = () => {
    setCurrentBank((currentBank + soundBanks.length - 1) % soundBanks.length);
    setDisplay("");
  };

  // set up event listener for keydown
  useEffect(() => {
    // if one of keys for a drumPad is pressed, hit the drum pad
    const handleKeyDown = e => {
      const drumPadID = drumPadLetters.findIndex(x => {
        return x === String.fromCharCode(e.keyCode);
      });
      // if the drumPad letter was found, hit it
      if (drumPadID >= 0) {
        hitDrumPad(drumPadID, true);
      }
    };

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hitDrumPad]);

  return (
    <div>
      {/* <ReactFCCTest /> */}
      <div id="drum-machine">
        <div className="title">SOUND MACHINE</div>
        <BankSelector
          currentBank={soundBanks[currentBank].name}
          clickRightHandler={scrollBankRight}
          clickLeftHandler={scrollBankLeft}
        />
        <div id="display" className="display">
          {display}
        </div>
        {drumPadLetters.map((drumPad, index) => {
          return (
            <DrumPad
              hit={drumHits[index]}
              hitPad={drumPadID => hitDrumPad(drumPadID, true)}
              releasePad={drumPadID => hitDrumPad(drumPadID, false)}
              letter={drumPad}
              drumPadID={index}
              key={index}
              clip={soundBanks[currentBank].samples[index].file}
            />
          );
        })}
      </div>
    </div>
  );
}
