import React, { Component } from 'react'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "dilshan",
            ListC : [
                {fname : 'dilshan' , lname : 'Fernando' , age : 23 , id:1},
                {fname : 'Hasitha' , lname : 'Fernando' , age : 20 , id:2},
                {fname : 'Gayathre' , lname : 'chaminee' , age : 26 , id:3},
            ],
            
        }
        
      
    }
   
    CapitalName = () => {
        this.setState({
            name : "DILSHAN",
            email:""
        })
    }

    GetName = (e) => {
        const {name , value} = e.target
    
        this.setState({
            [name] : value,
        })

    }

    submit = (e) =>{
        e.preventDefault()
        console.log(this.state.name + '  ' + this.state.email);
        
    }
    
   
    
     

    render() {
        const dList = this.state.ListC.map((x)=>{
            return x.age > 20 ? (
                <div key={x.id}>
                    <li>{JSON.stringify(x)}</li>
                </div>
            ) : null
        }
            
        )

        return (
            <div>
                <h1>Hello {this.state.name} !! Welcome to the React World</h1>
                <button onClick = {this.CapitalName}>Capital Me</button>
                <div>
                    {this.state.email}
                    <form onSubmit={this.submit}>
                        <input name="name" onChange={this.GetName} placeholder="enter your name" type="text"/>
                        <input name="email" onChange={this.GetName} placeholder="enter your Email" type="text"/>
                        <button className="btn btn-primary">submit</button>
                    </form>
                </div>
                    <button className="btn btn-primary">cl</button> 
               
                   {dList}
            </div>
        )
    }
}
