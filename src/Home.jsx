import React from 'react';
import logo from './Images/h-logo.png'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <div>
          <div className="Apps">
            
              <header className="Apps-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/SignIn">
                <p style={{ color: "#f8f9f9", fontSize: 68, fontWeight: 'bold' }}>HARVOXX</p>
              </Link>
        
        {/* <Routes>
          <Route path='/SignIn' element={<SignIn/>} />
        </Routes> */}
              <p style={{ color: "#e3a824", fontSize: 48, fontWeight: 'bold' }}>
                TECH HUB
              </p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      {/* <SignIn /> */}
      {/* <SignUp /> */}

    </div>
    </div>
  )
}

export default Home