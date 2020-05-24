import React, { Component } from 'react'

export default class Test2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "This is Test2"
        }
    }

    SendData = ()=>{
        this.props.ChangeName(this.state.name)
    }

    render() {
        
        return (
            <div>
               <button onClick={this.SendData} > in test2 ClickMe</button>
            </div>
        )
    }
}
