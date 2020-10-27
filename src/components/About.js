import React, { Component } from 'react'

export default class About extends Component {
    state={
        about:''
    } 
    onSubmit=(e)=>{
        //this.props.addTodo(this.state.title);
        
        this.setState({about:''});
      
    }
    onChange=(e)=>{
       console.log( this.setState({[e.target.name]:e.target.value}));
    }
    render() {
        return (
            <div>
            <h1 style={{color:'red' ,marginLeft:'400px'}}>ABOUT</h1>   
            <form onSubmit={this.onSubmit} style={{marginLeft:'400px', width:'280px', height:'auto' ,boxSizing:'border-box', backgroundColor:'#333'}}>
            <h5 style={{color:'white'}}>ABOUT ME</h5>
            <div className=""  style={{margin:'20px'}}>
            <input type="textarea" onChange={this.onChange} placeholder="About Me"  name="about"autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px' }}>
            <input type="submit" placeholder="" ></input>
            </div>
            </form>
            </div>
         
        )
    
    }
}
