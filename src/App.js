import React, { useState, useEffect } from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";
import DrumPad from "./DrumPad";

const drumPads = [
  {
    id: "Q",
    samples: [
      {
        name: "closed hi-hat",
        file: "CYCdh_VinylK1-ClHat01.wav"
      }
    ]
  },
  {
    id: "W",
    samples: [
      {
        name: "open hi-hat",
        file: "CYCdh_VinylK1-OpHat.wav"
      }
    ]
  },
  {
    id: "E",
    samples: [
      {
        name: "tambourine",
        file: "CYCdh_VinylK1-Tamb.wav"
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

  // given a letter, find the drumPadID (index) of the drumPad
  const letterToDrumPad = letter => {
    return drumPads.findIndex(x => {
      return x.id == letter;
    });
  };

  const hitDrumPad = (drumPadID, hit) => {
    // confirm the drumPadID is valid for updating state
    if (drumPadID >= 0 && drumPadID < drumHits.length) {
      const updatedDrumHits = [...drumHits];
      updatedDrumHits[drumPadID] = hit;
      setDrumHits(updatedDrumHits);
      setDisplay(drumPads[drumPadID].samples[currentBank].name);
    }
  };

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

  // if a drumPad is clicked, mark it as hit
  const handleMouseDown = drumPadID => {
    hitDrumPad(drumPadID, true);
  };

  // if a drumPad is clicked, mark it as not hit
  const handleMouseUp = drumPadID => {
    hitDrumPad(drumPadID, false);
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
              drumPadID={index}
              key={index}
              // clip={drumPad.samples[currentBank].file}
            />
          );
        })}
      </div>
    </div>
  );
}
