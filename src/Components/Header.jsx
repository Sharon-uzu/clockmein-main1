import React from 'react';
import logo from '../Images/bg-logo.png';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <div className='header'>
        <Link to='/'><img src={logo} style={{cursor:'pointer'}}/></Link>
    </div>
  )
}

export default Header