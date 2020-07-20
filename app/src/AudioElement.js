import React, { Component } from "react"

export default class AudioElement extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    componentDidUpdate() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render() {
        console.log("Audi playing" , this.props.source);
        return (
        <div>
            {console.log("Audi playing" , this.props.source)}
            <audio controls loop className="audio-element"
            src={this.props.source}>
            </audio>
        </div>
        )
    }
}