import React, {Component} from 'react'



export default class Tape extends Component {

    constructor(props){
        super(props)
        this.state = {'tapeUrl' : 'https://www.kozco.com/tech/piano2-CoolEdit.mp3'}

        this.playTape = this.playTape.bind(this);      // bind method this.playTape.
    }

    playTape() {
        // console.log("playTape", this.props)
    }
    
    render(){
        let tp = this.props.tape
        let verbose = this.props.verbose
        console.log(tp)
        return (
            <div className="tape-container" onClick={this.playTape} >
                <div className="row">
                    <div className="col-1">
                        {verbose && <p>#{tp.id}</p>}
                    </div>
                    <div className="col-4">
                        {tp.artist} at {tp.venue}
                        <p>{tp.performance}</p>   
                    </div>
                    <div className="col-7">{tp.url}</div>
                </div>
            </div>
        )
    }
}