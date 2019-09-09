import React from "react"
import sound from './assets/test.wav'

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            play: false
        }

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
    }

    play = () => {
        this.setState({ play: true })
    }

    pause = () => {
        this.setState({ play: false })
    }

    render() {
        return (
            <div className="drum-pad">
                <span>Play Status: {this.state.play ? "Play" : "Pause"}</span>
                <br />
                <audio src={sound} autoPlay={this.state.play}/>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        )
    }
}

export default DrumPad