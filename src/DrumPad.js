import React, { useEffect } from "react";
import sound from "./assets/test.wav";
import "./DrumPad.css";

export default function DrumPad(props) {
  let audioRef = null;

  useEffect(() => {
    if (props.hit) {
      audioRef.currentTime = 0;
      audioRef.play();
    }
  }, [props.hit]);

  return (
    <div
      className={props.hit ? "drum-pad hit" : "drum-pad"}
      onMouseDown={() => props.mouseDownHandler(props.letter)}
      onMouseUp={() => props.mouseUpHandler(props.letter)}
    >
      {props.letter}
      <audio
        ref={audio => {
          audioRef = audio;
        }}
        src={sound}
      />
    </div>
  );
}
