import React, { Component } from 'react'
import Test2 from './Test2'

import axios from 'axios'

import {connect } from 'react-redux'

export class Test1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "This is Test1",
            Employees : []
        }
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('https://localhost:44351/Employee/getEmployee')
        .then(res =>{
            
            this.setState({
                Employees : res.data
            })
        })
    }

    ChangeName = (newName) => {
       this.setState({
           name:newName
       })
    }
    render() {
        const EmployeesDis = this.state.Employees.length == 2 ? (
            this.state.Employees.map((Employee)=>{
                
                
                return (
                    <div className="text-primary" key={Employee.id}>
                        {Employee.id}
                    </div>
                ) 
            })
        ) : (
            <div>No Employees</div>
        )

       

        return (
            <div>
                from Test1 --> {this.state.name}
                <Test2 ChangeName={this.ChangeName}  />
               
                {EmployeesDis}
            </div>
        )
    }
}

 const mapStateToProps = (state) =>{
            return {
                TestS:state.TestS
            }
        }

export default connect(mapStateToProps)(Test1)