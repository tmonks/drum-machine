import React, { useEffect, useState } from "react";
// import sound from "./assets/test.wav";
import "./DrumPad.scss";

export default function DrumPad(props) {
  let audioRef = null;

  const [animated, setLit] = useState(false);

  useEffect(() => {
    if (props.hit) {
      audioRef.currentTime = 0;
      audioRef.play();
    }
  }, [props.hit, audioRef]);

  const handleMouseDown = () => {
    setLit(false);
    props.mouseDownHandler(props.drumPadID);
  };

  const handleMouseUp = () => {
    setLit(true);
    props.mouseUpHandler(props.drumPadID);
  };

  return (
    <div
      className={`drum-pad ${props.hit ? "hit" : ""} ${
        animated ? "animated" : ""
      }`}
      onMouseDown={() => handleMouseDown()}
      onMouseUp={() => handleMouseUp()}
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
