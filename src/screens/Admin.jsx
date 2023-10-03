import React from 'react';
import dk from '../Images/dk.png';
import poly from '../Images/Polygon 1.png';
import brand from '../Images/logo (2).png';
import search from '../Images/search.png';
import setting from '../Images/setting.png';
import bell from '../Images/bell.png';
import teacher from '../Images/teacher.png';
import student from '../Images/student.png';
import classes from '../Images/class.png';
import course from '../Images/courses.png';
import report from '../Images/report.png';
import coment from '../Images/comment.png';
import setup from '../Images/settings.png';
import schedule from '../Images/schedule.png';
import { Link } from 'react-router-dom';



const Admin = () => {


  const AdminData = [
    {
        imgsrc: teacher,
        number: 0,
        text: "Teachers",
        links: '/Teachers'

    },

    {
        imgsrc: student,
        number: 0,
        text: "Students",
        links: '/Students'

    },
     
    {
        imgsrc: classes,
        number: 0,
        text: "Ongoing Class",
        links: '/Classes'

    },

    {
        imgsrc: course,
        number: 0,
        text: "Courses",
        links: '/Courses'

    },
     
    {
        imgsrc: report,
        number: 0,
        text: "Class Reports",
        links: '/Teachers'

    },
      
      
    {
        imgsrc: coment,
        number: 0,
        text: "Students Comment",
        links: '/Comment'

    },
       
       
    {
        imgsrc: schedule,
        number: 0,
        text: "Class Schedule",
        links: '/Schedule'

    },

    {
        imgsrc: setup,
        number: 0,
        text: "Setup",
        links: '/Teachers'

    }
];

  return (
    <div className='admin'>
        <img src={dk} alt="" className='dk' />
        <img src={brand} alt="" className='brand'/>
        <img src={poly} alt="" className='poly' />
        <div className="hello">
            <h5>Harvoxx</h5>
            <h4>Hello <br /> Ephrame</h4>
        </div>

        <div className="a-dash">
        <div className="dc"></div>
        <div className="dash">
            <div className="dash-c">
              <div className="search">
                <img src={search} alt="" />
                  <input type="search" name="" id="" placeholder='search' />
              </div>
          
              <div className="notification">
                <img src={setting} alt="" />
                <img src={bell} alt="" />
              </div>
            </div>
          
        </div>
        
        <div className="cards">
        {AdminData && AdminData.map(({imgsrc,number,text,links},index)=>{

          return(
            <Link to={links} className="card1" key={index}>
              <img src={imgsrc} alt="" />
              <p> {number}</p>
              <h2>{text}</h2>
          </Link>
            )
          })}
        

        </div>
              
        </div>

    </div>
      
  )
}

export default Admin