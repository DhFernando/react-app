import React, { Component } from 'react'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "dilshan",
            LObj:{
                id:null,
                fname:null,
                lname:null,
                age:null
            },

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
        // console.log(this.state.name + '  ' + this.state.email);
        
    }

    LObjss = (e) =>{
        const {name , value} = e.target
            this.setState(prevState=>({
                LObj : {
                    ...prevState.LObj,
                    [name] : value   
                }
            }))
    }
    addlist = (e) => {
        let d = this.state.LObj
        e.preventDefault()
        // console.log(this.state.ListC);
        d.id = Math.random()*100
        const ListCx = [...this.state.ListC ,d ]
        
        
        this.setState({
            ListC:ListCx
        })
        // console.log(this.state.ListC);
    }
    deleteEle = (id) =>{

        let filtered = this.state.ListC.filter(x => {
            return x.id != id 
        })

        this.setState({
            ListC : filtered
        })
           
    }
    
  
    render() {
        const dList = this.state.ListC.map((x)=>{
            return x.age > 20 ? (
                <div key={x.id}>
                    <li>{x.fname} <button className="btn btn-danger btn-sm" onClick={this.deleteEle.bind(this , x.id)}>Del</button></li>
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

                <div>
                    {JSON.stringify(this.state.LObj)}
                    <form onSubmit={this.addlist}>
                        <input name="fname" onChange={this.LObjss} placeholder="enter your fname" type="text"/>
                        <input name="lname" onChange={this.LObjss} placeholder="enter your lname" type="text"/>
                        <input name="age" onChange={this.LObjss} placeholder="enter your age" type="number"/>
                        <button className="btn btn-primary">submit</button>
                    </form>
                </div>
                    <button className="btn btn-primary"  >cl</button> 
              
               {this.state.name}
                   {dList}
            </div>
        )
    }
}
