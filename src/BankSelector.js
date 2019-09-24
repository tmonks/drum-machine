import React from "react";
import "./BankSelector.scss";

export default function BankSelector(props) {
  return (
    <div id="bank-selector">
      <div id="arrow-left" onClick={() => props.clickLeftHandler()}></div>
      <div className="display">{props.currentBank}</div>
      <div id="arrow-right" onClick={() => props.clickRightHandler()}></div>
    </div>
  );
}
