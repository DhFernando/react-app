import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-light bg-light">
                    <div >
                        <ul className="navbar-nav">
                            <li className="nav-item"> <Link to='/'>Home</Link>  </li>
                            <li className="nav-item"> <Link to='/about'>About</Link>  </li>
                            <li className="nav-item"> <Link to='/contact'>Contact</Link>  </li>
                            <li className="nav-item"> <Link to='/MainComponent'>MainComponet</Link>  </li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
        )
    }
}
