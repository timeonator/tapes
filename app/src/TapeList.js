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
        let verbose = this.props.verbose

        return (
            <div className="container">
            <ul>       
            { this.props.tapes.map( (element) =>
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