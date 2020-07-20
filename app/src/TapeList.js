import React from 'react'
import Tape from './Tape'



export default class TapeList extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    listElement(element){
        return(
            <li>element</li>
        )
    }
    
    render(){
        let tl = this.props.tapes
        let verbose = this.props.verbose
        console.log(tl)
        return (
            <ul>       
            { tl.map( (element) => <li key={element.id}><Tape tape={element} verbose={true}/></li>) } 
            </ul>
        );

    }
}