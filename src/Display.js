import React from "react";
import "./Display.scss";

export default function DrumPad(props) {
  return (
    <div id="display-container">
      <div id="triangle-left"></div>
      <div id="display">{props.clipName}</div>
      <div id="triangle-right"></div>
    </div>
  );
}
