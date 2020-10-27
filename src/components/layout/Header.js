import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class  Header extends Component {
    render() {
        return (
            <div style={headStyle}>
                <h1>My CV BUILDER</h1>
              
                <Link style={linkStyle} to="/">Home</Link> |
                <Link style={linkStyle} to ="/about">About</Link>|
                <Link style={linkStyle} to="/education">Education</Link>|
                <Link style={linkStyle} to="/experience">Experience</Link>|
                <Link style={linkStyle} to="/portfolio">PortFolios</Link>|
                <Link style={linkStyle} to="/profile">Profile</Link>|
                <Link style={linkStyle} to="/skills">Skills</Link>
                <Link style={linkStyle} to="/login">Login</Link>
                <h1>This is a Cv Application Builder</h1>
            </div>
        )
    }
}
const headStyle={
    backgroundColor:'#333',
    color:'#fff',
    position:'absolute',
    height:'200px',
    width:"100%"
}
const linkStyle={
    color:'#fff',
    margin:'10px'
}

export default Header;