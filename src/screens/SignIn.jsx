import React from 'react';
import '../App.css';
import hLogo from "../Images/h-logo.png";
import profile from "../Images/profile.png";
import password from "../Images/password.png";
import { Link } from 'react-router-dom';
import Select from 'react-select'

const SignIn = () => {

  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' }
  ]

  return (
    <div className='sign'>
          <div className="sign-c">
              <div className="sign-img">
                  <img src={hLogo} alt="" />
              </div>
              <div className="form-c">
                  <form action='Forgot' method='get'>
                  <h2>Welcome to Harvoxx Admin portal</h2>
                  <p>A community of teachers and students present to share ideas and knowledge</p>
                  <h2>Lets sign you in</h2>

                  <div className="inputs">
                      <div className="input-f">
                          <input type="text" placeholder='Username or email' className='input'/>
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Password' className='input' />
                          <img src={password} alt="" />
                        </div>
                          

                        <Select className='select' options={options} placeholder='Select Role'/>

                          <div className="forgot">
                              <span className='radio'><input type="radio" name="" id="" /> <span>Remember me</span> </span>
                              <Link to="/Forgot">
                                  <span className='pw' style={{color:"#1A144A", cursor:"pointer"}}>Forgot password</span>
                            </Link>
                          </div>

                          <input type="submit" value="Sign In" className='sub-btn' />
                          <Link to="/SignUp">
                            <span className='dont'>Don't have an account? <span className='up'>Sign up</span></span>
                        </Link>
                           
                  </div>
              </form>
                
              </div>
              
          </div>  
          
    </div>
  )
}

export default SignIn