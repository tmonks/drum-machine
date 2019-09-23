import React, { useEffect, useState } from "react";
// import sound from "./assets/test.wav";
import "./DrumPad.scss";

export default function DrumPad(props) {
  let audioRef = null;

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (props.hit) {
      audioRef.currentTime = 0;
      setAnimated(false);

      // audio.play() returns a Promise
      let playPromise = audioRef.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            handleMouseUp();
            setAnimated(true);
          })
          .catch(error => {
            console.log("playback failed: " + error);
          });
      }
    }
  }, [props.hit, audioRef]);

  const handleMouseDown = () => {
    setAnimated(false);
    props.mouseDownHandler(props.drumPadID);
  };

  const handleMouseUp = () => {
    setAnimated(true);
    props.mouseUpHandler(props.drumPadID);
  };

  return (
    <div
      className={`drum-pad ${props.hit ? "hit" : ""} ${
        animated ? "animated" : ""
      }`}
      onMouseDown={() => handleMouseDown()}
      // onMouseUp={() => handleMouseUp()}
      onAnimationEnd={() => setAnimated(false)}
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
        // onEnded={() => console.log("playback finished")}
      />
    </div>
  );
}
