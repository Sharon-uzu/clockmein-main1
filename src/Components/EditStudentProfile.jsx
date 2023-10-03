import React from 'react'

const EditStudentProfile = () => {
  return (
    <div className='edit-details'>

      <label>Name</label> 
      <input type="text" placeholder='first name'/><br/>
      <input type="text" placeholder='last name'/><br/>
      <label>Course</label> 
      
      <select>
        <option value=''>Select course</option> 
        <option value='course1'>Product Design</option>
        <option value='course1'>Frontend Development</option>
        <option value='course1'>Digital Marketing</option>
      </select><br/>
        
      <label>Gender</label> 
      <select>
        <option value=''>Select gender</option>
        <option value='gender1'>Male</option>
        <option value='gender1'>Female</option>
      </select><br/>
      
        
      <label>Phone number</label> 
      <input type="tel" placeholder='phone no'/><br/>
      <label>Email</label>
      <input type="email" placeholder='Email'/>

    </div>
  )
}

export default EditStudentProfile