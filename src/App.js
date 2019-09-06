import React from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactFCCTest />
        <div id="drum-machine">
          <div id="display">Hello World</div>
          <div class="drum-pad">Q</div>
          <div class="drum-pad">W</div>
          <div class="drum-pad">E</div>
          <div class="drum-pad">A</div>
          <div class="drum-pad">S</div>
          <div class="drum-pad">D</div>
          <div class="drum-pad">Z</div>
          <div class="drum-pad">X</div>
          <div class="drum-pad">C</div>
        </div>
      </div>
    );
  }
}

export default App;
