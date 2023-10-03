import React from 'react'
import '../App.css';
import hLogo from "../Images/h-logo.png";
import profile from "../Images/profile.png";
import email from "../Images/email.png";
import password from "../Images/password.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='sign'>
          <div className="sign-c">
              <div className="sign-img">
                  <img src={hLogo} alt="" />
              </div>
              <div className="form-c">
                  <form action='SignIn' method='get'>
                  <h2>Welcome to Harvoxx Admin portal</h2>
                  <p>A community of teachers and students present to share ideas and knowledge</p>
                  <h2>Lets sign you up</h2>

                  <div className="inputs">
                      <div className="input-f">
                          <input type="text" placeholder='First name' className='input' />
                          <img src={profile} alt="" />
                      </div>
                      <div className="input-f">
                          <input type="text" placeholder='Last name' className='input' />
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="text" placeholder='Username' className='input' />
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="email" placeholder='Email' className='input' />
                          <img src={email} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Password' className='input' />
                          <img src={password} alt="" />
                      </div>
                          <input type="submit" value="Sign Up" className='sub-btn' />
                          <Link to="/SignIn">
                              <span className='dont'>Already have an account? <span style={{color:"#fff"}}>Sign In</span></span>
                          </Link>
                  </div>
              </form>
              </div> 
          </div>   
    </div>
  )
}

export default SignUp