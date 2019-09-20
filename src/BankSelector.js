import React from "react";
import "./BankSelector.scss";

export default function BankSelector(props) {
  return (
    <div id="display-container">
      <div id="triangle-left" onClick={() => props.clickLeftHandler()}></div>
      <div className="display">
        {props.currentBank}
        <br />
        {props.clipName}
      </div>
      <div id="triangle-right" onClick={() => props.clickRightHandler()}></div>
    </div>
  );
}
