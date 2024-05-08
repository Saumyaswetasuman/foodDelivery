import React, { useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const[currentState,setcurrentState]=useState("sign up")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt=''/>
            </div>
            <div className='login-popup-inputs'>
            {currentState==="login"?<></>:  <input type='text' placeholder='your name' required/>}
                <input type='email' placeholder='your email' required/>
                <input type='password' placeholder='password' required/>
            </div>
            <button>{currentState==="sign up"?"create account" :"login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By counting ,i agree to the trems f use & privecy and policy</p>
            </div>
            { currentState==='login'?
            <p>create a new account ?<span onClick={()=>setcurrentState("sign up")}>click here</span></p> : <p>already have an account?<span onClick={()=>setcurrentState("login")}>login  here</span></p>}
            
           
        </form>
    </div>
  )
}

export default LoginPopUp