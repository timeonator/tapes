import React, { Component } from "react"

export default class AudioElement extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
    }

    componentDidUpdate() {
        const audioE1 = document.getElementsByClassName("audio-element")[0];
        audioE1.play()
    }
    // playAudio() {
    //     this.audioEl.play()
    // }

    render() {

        return (
        <div>
            {console.log("Audio playing" , this.props.source)}
            <audio controls loop className="audio-element"
            src={this.props.source}>
            </audio>
        </div>
        )
    }
}