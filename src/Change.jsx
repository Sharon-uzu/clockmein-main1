import React from 'react';
import change from '../src/Images/change.png';
import password from '../src/Images/password.png';
import { useNavigate } from 'react-router-dom';


const Change = () => {
  const navigate = useNavigate();

  const saveItem = () => {
     navigate('/SignIn')
   }
  return (
  <div className='forgot-c'>
      <div className="f-img">
        <img src={change} alt="" />
      </div>
      <div className="f-form">
        <form className='change'>
          <h3>Change password</h3>
          <p>Kindly enter a new password</p>
          
            <div className="input-f">
              <input type="password" placeholder='New Password' className='input' />
                <img src={password} alt="" />
            </div>

            <div className="input-f">
              <input type="password" placeholder='Confirm Password' className='input' />
                <img src={password} alt="" />
            </div>
                                      

         
        <input className='f-send' type="submit" value="Change Password" onClick={saveItem} />
          

        </form>
        
      </div>
    </div>
  )
}

export default Change