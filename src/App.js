
import './App.css';
import Home from './Home';
import Forgot from './screens/Forgot';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Verification from './screens/Verification';
import Change from './Change';
import Admin from './screens/Admin';
import Teachers from './screens/Teachers';
import Students from './screens/Students';
import Schedule from './screens/Schedule';
import Courses from './screens/Courses';
import Classes from './screens/Classes';
import Comment from './screens/Comment';
import Employee from './screens/Employee';
import Intern from './screens/Intern';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/Change' element={<Change />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Teachers' element={<Teachers/>} />
          <Route path='/Students' element={<Students/>} />
          <Route path='/Schedule' element={<Schedule/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Classes' element={<Classes/>} />
          <Route path='/Comment' element={<Comment/>} />
          <Route path='/Employee' element={<Employee/>} />
          <Route path='/Employee' element={<Employee/>} />
          <Route path='/Intern' element={<Intern/>} />
          
        </Routes>
    </div>
  );
}

export default App;
