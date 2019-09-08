import React from "react";
import "./App.css";
import ReactFCCTest from "react-fcctest";
import sound from './assets/test.wav'
import DrumPad from './DrumPad'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyPressed: 'None'
    }

    this.audio = new Audio(sound)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress = (e) => {
   this.setState({ keyPressed: e.keyCode }) 
   if (e.keyCode === 67) {
     this.audio.currentTime = 0
     this.audio.play()
   }
  }

  play = () => {
    this.audio.play()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false)
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
          <div className="drum-pad">X</div>
          <div className="drum-pad">C</div>
        </div>
        <button onClick={this.play}>Play</button>
        <DrumPad />
      </div>
    );
  }
}

export default App;
