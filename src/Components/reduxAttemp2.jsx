import React, { Component } from 'react'
import Displaypost from './displypost'

import {Provider} from 'react-redux'

import store from '../store'

class reduxAttemp2 extends Component {
    constructor(props){
        super(props)
        this.state={
            id:3,
            title:"",
            body:""
        }
    }

    onChange = (e) =>{
        const { name , value } = e.target
        this.setState({
            [name] : value
        })
    }

    submitPost = () =>{
        this.setState({
            id : this.state.id + 1
        })
        console.log(this.state);
        
    }
    
    render() {
        return (
           <Provider store={store}>
            <div>
                
                <h4>Create Post</h4>
                <hr/>
                <label htmlFor="Title">Title</label>
                <br/>
                
                <input name="title" type="text" onChange={this.onChange}/>
                <br/>
                <label htmlFor="Body">Body</label>
                <br/>
                <input name="body" type="text" onChange={this.onChange}/>
                <br/>
                <button onClick={this.submitPost}>create</button>

                    <hr/>
            {JSON.stringify(this.state)}
                    <Displaypost />

            </div>
           </Provider>
        )
    }
}

export default reduxAttemp2
