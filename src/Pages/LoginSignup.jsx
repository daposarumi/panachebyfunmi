import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Name" required/>
            <input type='email' placeholder="Email" required/>
            <input type='password' placeholder="Password" required/>
          </div>
          <button>Sign Up</button>
          <p className="loginsignup-login">Already have an account?<span>Login</span></p>
          <div className="loginsignupagree">
            <input type="checkbox" name="" id=""/>
            <p>By continuing, I agree to the terms of use and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
