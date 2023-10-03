import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import SearchInput from '../Components/SearchInput';

const Schedule = () => {

  const Schedule = [
    {
        course: 'Digital marketing',
        day1: "Monday",
        time1:'10:00pm',
        time2:'10:00pm',
        day2: ' friday',
        teacher1: 'Vincent',
        role1 : 'Employee',
        teacher2: 'Joy',
        role2: 'Intern'

    },

    {
        course: 'Data Analysis',
        day1: "Monday",
        time1:'10:00pm',
        time2:'10:00pm',
        day2: ' friday',
        teacher1: 'Vincent',
        role1 : 'Employee',
        teacher2: 'Joy',
        role2: 'Intern'
    },
     
    {
      course: 'Product Design',
      day1: "Monday",
      time1:'10:00pm',
      time2:'10:00pm',
      day2: ' friday',
      teacher1: 'Vincent',
      role1 : 'Employee',
      teacher2: 'Joy',
      role2: 'Intern'
    },

    {
      course: 'Frontend Dev',
      day1: "Monday",
      time1:'10:00pm',
      time2:'10:00pm',
      day2: ' friday',
      teacher1: 'Vincent',
      role1 : 'Employee',
      teacher2: 'Joy',
      role2: 'Intern'
    }
      
    
];
  return (
    <div>
    <Header/>

    <div className='content'>
    <div className='dark'></div>
        <Sidebar/>
        <div className='right-content'>
          <div className=' sche'>

            <SearchInput/>

          </div>

          <div className='create'>
            <button>Create Schedule</button>
          </div>

          <h2 className='course-sch'>Course Schedule</h2>

          <div className='schedule'>

            {Schedule && Schedule.map(({course,day1,time1,day2,time2,teacher1,role1,teacher2,role2},index)=>{
              return(

            <div className='schedule-c'>
              <h3>{course}</h3>
              <h4 className='title'><span>Days</span> <span>Time</span></h4>
              <h4><span>{day1}</span> <span>{time1}</span></h4>
              <h4><span>{day2}</span> <span>{time2}</span></h4>
  
              <h4 className='title'>Teachers</h4>
              <h4><span>{teacher1}</span> <span>{role1}</span></h4>
              <h4><span>{teacher2}</span> <span>{role2}</span></h4>
            
            </div>

            )
                  })}

          
          </div>

          


         
          
          

          

          

        </div>
    </div>
    </div>
  )
}

export default Schedule