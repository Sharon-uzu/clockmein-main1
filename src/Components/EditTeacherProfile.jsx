import React from 'react'

const EditTeacherProfile = () => {
  return (
    <div className='edit-details'>

      <label>Name</label> 
      <input type="text" placeholder='first name'/><br/>
      <input type="text" placeholder='last name'/><br/>
      <label>Phone number</label> 
      <input type="tel" placeholder='phone no'/><br/>
      <label>Email</label>
      <input type="email" placeholder='Email'/>

    </div>
  )
}

export default EditTeacherProfile