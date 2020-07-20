import React from 'react'



export default class Tape extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        let tp = this.props.tape
        let verbose = this.props.verbose
        console.log(tp)
        return (
            <div className="tape-container">
                {verbose && <p>ID: {tp.id}</p>}
                <p>{tp.artist} at {tp.venue}</p>
                <p>{tp.performance}</p>
                {verbose && <p>URL: {tp.url}</p>}
            </div>
        )
    }
}