import React from 'react'

const AddStudent = () => {
  return (
    <div className='teacher-form'>

      <div className='input-cont'>

        <p>Name</p>
        <input type='text' placeholder='first name'/>
        <input type='text' placeholder='last name'/>
        <p>Gender</p>
        <select>
          <option value=''>Select Gender</option>
          <option value=''>Female</option>
          <option value=''>Male</option>
        </select>
        <p>Course</p>
        <select>
          <option value=''>Select Course</option>
          <option value=''>Product Design</option>
          <option value=''>Frontend Development</option>
          <option value=''>Graphics Design</option>
        </select>

        <p>Upload Photo</p>
        <input type='file' className='file'/>
      
      </div>

      <div className='input-cont'>
        <p>Phone Number</p>
        <input type='tel'/>

        <p>Email</p>
        <input type='email'/>

        <p>Total no of classes</p>
        <input type='number'/>

       
      
      </div>
    
    
    </div>
  )
}

export default AddStudent