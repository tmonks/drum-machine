import React, { useEffect, useState } from "react";
// import sound from "./assets/test.wav";
import "./DrumPad.css";

export default function DrumPad(props) {
  let audioRef = null;

  const [lit, setLit] = useState(false);

  useEffect(() => {
    if (props.hit) {
      audioRef.currentTime = 0;
      audioRef.play();
      setLit(true);
    }
  }, [props.hit, audioRef]);

  const handleClick = () => {
    setLit(false);
    props.mouseDownHandler(props.drumPadID);
  };

  return (
    <div
      className={lit ? "drum-pad hit" : "drum-pad"}
      onMouseDown={() => handleClick()}
      onMouseUp={() => props.mouseUpHandler(props.drumPadID)}
      onAnimationEnd={() => setLit(false)}
      id={"drumPad" + props.drumPadID}
    >
      {props.letter}
      <audio
        ref={audio => {
          audioRef = audio;
        }}
        src={process.env.PUBLIC_URL + "/sounds/" + props.clip}
        id={props.letter}
        className="clip"
      />
    </div>
  );
}
