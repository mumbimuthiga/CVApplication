import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
            <h1 style={{color:'red' ,marginLeft:'400px'}}>PROFILE</h1>   
            <form style={{marginLeft:'400px', width:'280px', height:'auto' ,boxSizing:'border-box', backgroundColor:'#333'}}>
            <h5 style={{color:'white'}}>PERSONAL INFO</h5>
            <div className=""  style={{margin:'20px'}}>
            <input type="text/number" placeholder="Address" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px'}}>
            <input type="text" placeholder="Email" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px'}}>
            <input type="number" placeholder="Phone NUmber" autoComplete="off" style={{height:'25px',width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px'}}>
            <input type="text" placeholder="Main Language" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px'}}>
            <input type="text" placeholder="Second Language" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            <div className="" style={{margin:'20px' }}>
            <input type="text" placeholder="Third Language" autoComplete="off" style={{height:'25px' ,width:'200px',borderRadius:'5px'}}></input>
            </div>
            
            <div className="" style={{margin:'20px' }}>
            <input type="submit" placeholder="" ></input>
            </div>
           
            </form>   
            </div>
        )
    }
}
