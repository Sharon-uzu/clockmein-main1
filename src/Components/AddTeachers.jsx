import React from 'react'

const AddTeachers = () => {
  return (
    <div className='teacher-form'>

      <div className='input-cont'>

        <p>Name</p>
        <input type='text' placeholder='first name'/>
        <input type='text' placeholder='last name'/>
        <p>Catergory</p>
        <select>
          <option value=''>Select Catergory</option>
          <option value=''>Employee</option>
          <option value=''>Intern</option>
        </select>
        <p>Course</p>
        <select>
          <option value=''>Select Course</option>
          <option value=''>Product Design</option>
          <option value=''>Frontend Development</option>
          <option value=''>Graphics Design</option>
        </select>
      
      </div>

      <div className='input-cont'>
        <p>Phone Number</p>
        <input type='tel'/>

        <p>Email</p>
        <input type='email'/>

        <p>Upload Photo</p>
        <input type='file' className='file'/>
      
      </div>
    
    
    </div>
  )
}

export default AddTeachers