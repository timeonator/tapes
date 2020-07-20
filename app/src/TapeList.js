import React from 'react'
import Tape from './Tape'
import AudioElement from './AudioElement'



export default class TapeList extends React.Component {
    constructor(props){
        super(props)
        this.state= { currentTape : this.props.tapes[0]}
        this.playTape = this.playTape.bind(this);
    }


    playTape(tape,e) {
        this.setState({currentTape: tape})
    }
    // shouldComponentUpdate(){
    //     return true;
    // }

    
    render(){
        let tl = this.props.tapes
        let verbose = this.props.verbose
        console.log(tl) 
        console.log("currntly Playing",this.state.currentTape)
        return (
            <div className="container">
            <ul>       
            { tl.map( (element) =>
                <li key={element.id} onClick={(e) => this.playTape(element,e)} >
                    <Tape tape={element} verbose={true} />
                </li>) 
            } 
            </ul>
            <AudioElement source={this.state.currentTape.url} />
            </div>
        );

    }
}