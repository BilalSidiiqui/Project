import React, { Component } from "react";
import userServices from "../Services/UserServices";
import '../App.css';

const SignUp =(props)=> {
    const [fname,setFname]=React.useState();
    const [lname,setLname]=React.useState();
     const [email,setEmail]=React.useState();
    const [password,setPassword]=React.useState();
  
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label style={{textAlign:'center', marginLeft:'680px'}}>First name</label>
                    <input style={{width:'400px', marginLeft:'530px' }} type="text" className="form-control" placeholder="First name" value={fname} onChange={e=>{
                        setFname(e.target.value)
                    }} />
                </div>

             

                <div className="form-group">
                    <label style={{textAlign:'center', marginLeft:'680px'}}>Email address</label>
                    <input style={{width:'400px', marginLeft:'530px' }} type="email" className="form-control" placeholder="Enter email" value={email} onChange={e=>{
                        setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label style={{textAlign:'center', marginLeft:'680px'}}>Password</label>
                    <input style={{width:'400px', marginLeft:'530px' }} type="password" className="form-control" placeholder="Enter password" value={password} onChange={
                        e=>{
                            setPassword(e.target.value)
                        }
                    } />
                </div>

                <button style={{textAlign:'center', marginLeft:'650px', width:'180px'}} type="submit" className="btn btn-primary btn-block" onClick={e=>{
                    userServices.register(fname,email,password).then((data)=>{
                        console.log(data)
                        window.location.href="/sign-in"
                    }).catch(err=>{
                        console.log(err)
                    })
                   
                }}>Sign Up</button>

                
            </form>
        );
    }
export default SignUp;