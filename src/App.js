import React, { useState, useEffect } from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";
import DrumPad from "./DrumPad";

const drumPads = [
  {
    id: "Q",
    samples: [
      {
        name: "kick drum",
        file: "CYCdh_VinylK1-Kick01.wav"
      }
    ]
  },
  {
    id: "W",
    samples: [
      {
        name: "snare",
        file: "CYCdh_VinylK1-Snr01.wav"
      }
    ]
  },
  {
    id: "E",
    samples: [
      {
        name: "open hi-hat",
        file: "CYCdh_VinylK1-OpHat.wav"
      }
    ]
  },
  {
    id: "A",
    samples: [
      {
        name: "kick drum",
        file: "CYCdh_VinylK1-Kick01.wav"
      }
    ]
  },
  {
    id: "S",
    samples: [
      {
        name: "snare",
        file: "CYCdh_VinylK1-Snr01.wav"
      }
    ]
  },
  {
    id: "D",
    samples: [
      {
        name: "open hi-hat",
        file: "CYCdh_VinylK1-OpHat.wav"
      }
    ]
  },
  {
    id: "Z",
    samples: [
      {
        name: "kick drum",
        file: "CYCdh_VinylK1-Kick01.wav"
      }
    ]
  },
  {
    id: "X",
    samples: [
      {
        name: "snare",
        file: "CYCdh_VinylK1-Snr01.wav"
      }
    ]
  },
  {
    id: "C",
    samples: [
      {
        name: "open hi-hat",
        file: "CYCdh_VinylK1-OpHat.wav"
      }
    ]
  }
];

export default function App() {
  const [display, setDisplay] = useState("None");
  const [hit, setHit] = useState(false);
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

  const letterToDrumPad = letter => {
    return drumPads.findIndex(x => {
      return x.id == letter;
    });
  };

  const hitDrumPad = (letter, hit) => {
    const drumPadID = letterToDrumPad(letter);

    if (drumPadID >= 0 && drumPadID < drumHits.length) {
      const updatedDrumHits = [...drumHits];
      updatedDrumHits[drumPadID] = hit;
      setDrumHits(updatedDrumHits);
      setDisplay(drumPads[drumPadID].samples[currentBank].name);
    }
  };

  const handleKeyDown = e => {
    hitDrumPad(String.fromCharCode(e.keyCode), true);
  };

  const handleKeyUp = e => {
    hitDrumPad(String.fromCharCode(e.keyCode), false);
  };

  const handleMouseDown = letter => {
    hitDrumPad(letter, true);
  };

  const handleMouseUp = letter => {
    hitDrumPad(letter, false);
  };

  useEffect(() => {
    console.log("Adding event listeners...");
    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);

    return () => {
      console.log("Cleaning up...");
      document.removeEventListener("keydown", handleKeyDown, false);
      document.removeEventListener("keyup", handleKeyUp, false);
    };
  }, []);

  return (
    <div>
      <ReactFCCTest />
      <div id="drum-machine">
        <div id="display">{display}</div>
        {drumPads.map((drumPad, index) => {
          return (
            <DrumPad
              hit={drumHits[index]}
              mouseDownHandler={handleMouseDown}
              mouseUpHandler={handleMouseUp}
              letter={drumPad.id}
            />
          );
        })}
      </div>
    </div>
  );
}
