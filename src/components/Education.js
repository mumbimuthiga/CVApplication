import React, { Component } from 'react'

 class Education extends Component {
    render() {
        return (
            <div>
            <h1 style={{color:'red' ,marginLeft:'400px'}}>EDUCATION</h1>   
            <form style={{marginLeft:'400px', width:'280px', height:'auto' ,boxSizing:'border-box', backgroundColor:'#333'}}>
            <h5 style={{color:'white'}}>EDUCATION</h5>
            <div className=""  style={{margin:'20px'}}>
            <input type="number" placeholder="Start Year" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className=""  style={{margin:'20px'}}>
            <input type="text" placeholder="Name of Institution" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className=""  style={{margin:'20px'}}>
            <input type="number" placeholder="End Year" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px' }}>
            <input type="submit" placeholder="" ></input>
            </div>
            </form>
            </div>
        )
    }
}
export default Education;
