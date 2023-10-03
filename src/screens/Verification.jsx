import React from 'react';
import verify from "../Images/trouble.png";
import { useNavigate } from 'react-router-dom';


const Verification = () => {

  const navigate = useNavigate();

  const saveItem = () => {
     navigate('/Change')
  }
  return (
   <div className='forgot-c'>
      <div className="f-img">
        <img src={verify} alt="" />
      </div>
      <div className="f-form">
        
        <form>
          <h3>Trouble logging in?</h3>
          <p>Enter your email and we will send you a verification code</p>
          <div className="email-input">
            <label htmlFor="">Verification code</label> <br />
            <input type="email" name="" id="" />
          </div>
          <input className='f-send' type="submit" value="Send" onClick={saveItem} />
          <p>Send code again</p>

        </form>
        
      </div>
    </div>
  )
}

export default Verification