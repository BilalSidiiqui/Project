import React, { Component } from "react";
import Home from './home'
import Product from './Product'
import '../App.css' 

import userServices from "../Services/UserServices";
const Login=()=>
     {
         const[email,setEmail]=React.useState();
         const[password,setPassword]=React.useState();
        return (
            <form>
                
                <h3>Sign In</h3>
                
                
                <div className="form-group">
                
                    <label style={{textAlign:'center', marginLeft:'680px'}}>Email address</label>
                    <input  style={{width:'400px', marginLeft:'530px' }}type="email" className="form-control" placeholder="Enter email" value={email} onChange={e=>{
                        setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label style={{textAlign:'center', marginLeft:'680px'}}>Password</label>
                    <input style={{width:'400px', marginLeft:'530px' }}type="password" className="form-control" placeholder="Enter password" value={password} onChange={
                        e=>{
                            setPassword(e.target.value)
                        }
                    } />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input style={{textAlign:'center', marginLeft:'680px'}}type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label style={{textAlign:'center', marginLeft:'550px'}}className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button style={{textAlign:'center', marginLeft:'660px', width:'180px'}} type="submit" className="btn btn-primary btn-block" onClick={e=>{
                    userServices.login(email,password).then((data)=>{
                        console.log(data)
                        window.location.href="/Home"
                    }).catch(err=>{
                        console.log(err)
                    })
                    
                }}>Submit</button>
                
                
            </form>
        );
    }
export default Login