import React from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";
import DrumPad from "./DrumPad";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyPressed: "None",
      hit: false
    };

    // this.audio = new Audio(sound);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleKeyPress = e => {
    this.setState({ keyPressed: e.keyCode });
    if (e.keyCode === 88) {
      this.setState({ hit: true });
      // this.audio.currentTime = 0;
    }
  };

  handleKeyUp = e => {
    if (this.state.hit) {
      this.setState({ hit: false });
    }
  };

  handleMouseDown = e => {
    this.setState({ hit: true });
  };

  handleMouseUp = e => {
    this.setState({ hit: false });
  };

  play = () => {
    this.audio.play();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
    document.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
    document.removeEventListener("keyup", this.handleKeyUp, false);
  }

  render() {
    return (
      <div>
        <ReactFCCTest />
        <div id="drum-machine">
          <div id="display">Key Pressed: {this.state.keyPressed}</div>
          <div className="drum-pad">Q</div>
          <div className="drum-pad">W</div>
          <div className="drum-pad">E</div>
          <div className="drum-pad">A</div>
          <div className="drum-pad">S</div>
          <div className="drum-pad">D</div>
          <div className="drum-pad">Z</div>
          <DrumPad
            hit={this.state.hit}
            mouseDownHandler={this.handleMouseDown}
            mouseUpHandler={this.handleMouseUp}
          />
          <div className="drum-pad">C</div>
        </div>
      </div>
    );
  }
}

export default App;
