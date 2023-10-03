import React from 'react';
import forgot from "../Images/forgot.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const navigate = useNavigate();

  const saveItem = () => {
     navigate('/Verification')
   }
  return (
    <div className='forgot-c'>
      <div className="f-img">
        <img src={forgot} alt="" />
      </div>
      <div className="f-form">
        <form action="">
          <h3>Trouble logging in?</h3>
          <p>Enter your email and we will send you a verification code</p>
          <div className="email-input">
            <label htmlFor="">Email</label> <br />
            <input type="email" name="" id="" />
          </div>
        <input className='f-send' type="submit" value="Send" onClick={saveItem} />
          <p>Return to
            <Link to= "/SignIn"> <span style={{ color: "#fff" }}>SignIn</span> </Link>
          </p>

        </form>
        
      </div>
    </div>
  )
}

export default Forgot