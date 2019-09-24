import React, { useEffect, useState } from "react";
import "./DrumPad.scss";

export default function DrumPad(props) {
  let audioRef = null;
  const [animating, setAnimating] = useState(false);

  // play audio when props.hit is set to true
  useEffect(() => {
    if (props.hit) {
      // set playback position and release animation in case of multiple hits in rapid succession
      audioRef.currentTime = 0;
      setAnimating(false);

      // audio.play() returns a Promise
      let playPromise = audioRef.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // audio playback is starting, start release animation and release the pad
            setAnimating(true);
            props.releasePad(props.drumPadID);
          })
          .catch(error => {
            console.log("playback failed: " + error);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hit, audioRef]);

  const handleMouseDown = () => {
    setAnimating(false); // stop release animation
    props.hitPad(props.drumPadID); // mark it as hit
  };

  return (
    <div
      className={`drum-pad ${animating ? "animating" : ""}`}
      onMouseDown={() => handleMouseDown()}
      onAnimationEnd={() => setAnimating(false)}
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
