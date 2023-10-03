import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import SearchInput from '../Components/SearchInput';
import Filter from '../Components/Filter';

const Classes = () => {

    const Classes= [
        {
            course: 'Courses',
            one:'Marketting',
            two:'Cyber Security',
            three: 'Frontend',
    
        },
    
        {
            course: 'Teachers',
            one:'Ephraim',
            two:'John',
            three: 'Vincent',
            role1: 'Employee',
            role2: 'Employee',
            role3: 'Intern',
        },
         
        {
          course: 'Attendance',
          one:'12 students',
          two:'5 students',
          three: '10 students'
        },
    
        {
          course: 'Class Time',
          one:'10pm',
          two:'12pm',
          three: '2pm'
        }
          
        
    ];


  return (
    <div>
        <Header/>

        <div className='content'>
        <div className='dark'></div>
            <Sidebar/>
            <div className='right-content'>
                <div className='courses'>
                    <div className='top-flex'>

                        <SearchInput/>

                        <Filter/>
                    

                    </div>
                </div>


                <div className='create'>
            <button>Create Schedule</button>
          </div>

          <h2 className='course-sch'>Today's Classes</h2>

          <div className='schedule'>

            {Classes && Classes.map(({course,one,two,three,time2,role1,role2,role3},index)=>{
              return(

            <div className='schedule-c'>
              <h3 style={{color:'white'}}>{course}</h3>
              <h4><span className='span1'>{one}</span> <span>{role1}</span></h4>
              <h4><span className='span1'>{two}</span> <span>{role2}</span></h4>
  
              <h4><span className='span1'>{three}</span> <span>{role3}</span></h4>
            
            </div>

            )
                  })}

          
          </div>

              

                
              

            </div>
        </div>
    </div>
  )
}

export default Classes