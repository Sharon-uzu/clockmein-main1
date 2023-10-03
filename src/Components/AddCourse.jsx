import React from 'react'

const AddCourse = () => {
  return (
    <div className='edit-details'>

    <label>Course</label> 
    <select className='course-drop'>
          <option></option>
          <option value='1'>Frontend Dev.</option>
          <option value='2'> Product Design</option>
          <option value='3'>Digital Marketting</option>
          <option value='4'>Data Analysis</option>
        </select>

    <div className='classes'>

      <div className='class-days'>
      <label>Class days</label> 
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednessday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
      
      </div>

      <div className='class-time'>
      <label>Class time</label> 
        <div className='time1'>
          <input type='text' placeholder='From' className='time-input'/>
          <input type='text' placeholder='To' className='time-input'/>
        </div>
      
      </div>
    
    </div>
    
    <label>Teacher</label> 
    <input type="text" placeholder='first name'/><br/>
    <input type="text" placeholder='last name'/><br/>
    <input type="text" placeholder='Class'/><br/>
    

  </div>
  )
}

export default AddCourse