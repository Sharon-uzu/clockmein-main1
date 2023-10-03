import React, {useState} from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import sun from '../Images/sun.png';
import Filter from '../Components/Filter';
import SearchInput from '../Components/SearchInput';
import edit from '../Images/edit.png';
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import AddTeachers from '../Components/AddTeachers';
import EditTeacherProfile from '../Components/EditTeacherProfile';

const Teachers = () => {


  const Employees = [
    {
        img: sun,
        name: 'Ngowari Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'princessngowari@gmail.com',
        days: 'Mon, Thurs',
        edit:edit

    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Wed, Fri',
      edit:edit


    },
     
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, wed',
      edit:edit

    }
      
    
];


// TEACHER SignUp MODAL

    const [isFormOpen, setFormIsOpen] = useState(false);
    const toggleFormModal = () => {
      setFormIsOpen(!isFormOpen);
    };

    // TEACHER Edit MODAL

    const [isEditOpen, setEditIsOpen] = useState(false);
    const toggleEditModal = () => {
      setEditIsOpen(!isEditOpen);
    };





  const Interns = [
    {
        img: sun,
        name: 'Glory Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'gloryngowari@gmail.com',
        days: 'Mon, Fri',
        edit:edit
    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Tues, wed',
      edit:edit


    },
    
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, Tues',
      edit:edit


    }
      
    
  ];



  return (
    <div>
        <Header/>

        <div className='content'>
        <div className='dark'></div>
            <Sidebar/>
            <div className='right-content'>
              <div className='top'>

                <div className='top1'>
                <Link to='/Employee' style={{color:'#000'}}><p>20 Employees</p></Link>
                <Link to='/Intern' style={{color:'#000'}}><p>3 Interns</p></Link>
                </div>

                <SearchInput/>

                <Filter/>

              </div>

              <div className='add'>
              <button onClick={() => setFormIsOpen(true)} style={{cursor:'pointer'}}>Add Teachers</button>
              </div>

              <div className='employee'>
              
                <h2 className='text-sm'>Employees</h2>
              
                <div className='cards'>

                {Employees && Employees.map(({img,name,role,tel,email,days},index)=>{
                  return(
                    <div className='card'>
                      <img src={edit} className='edit' style={{cursor:'pointer'}} onClick={() => setEditIsOpen(true)}/>
                      <img src={img}/>
                      <h3>{name}</h3>
                      <p>{role}</p>

                      <div className='white-bg'>
                        <p>Phone number</p>
                        <h5> {tel}</h5>

                        <p>Email</p>
                        <h5> {email}</h5>

                        <p>Class days</p>
                        <h5> {days}</h5>

                      </div>

                    </div>

                    )
                  })}
                    


                </div>

                <Link to='/Employee' style={{color:'#000'}}><h4>See all</h4></Link>
              
              </div>


              <div className='employee'>
              
                <h2>Interns</h2>
              
                <div className='cards'>

                  {Interns && Interns.map(({img,name,role,tel,email,days},index)=>{
                    return(
                      
                      <div className='card'>
                        <img src={edit} className='edit' style={{cursor:'pointer'}} onClick={() => setEditIsOpen(true)}/>
                        <img src={img}/>
                        <h3>{name}</h3>
                        <p>{role}r</p>

                        <div className='white-bg'>
                          <p>Phone number</p>
                          <h5> {tel}</h5>

                          <p>Email</p>
                          <h5> {email}</h5>

                          <p>Class days</p>
                          <h5> {days}</h5>

                        </div>

                      </div>

                      )
                    })}
                    


                </div>

                <Link to='/Intern' style={{color:'#000'}}><h4>See all</h4></Link>
              
              </div>

              

              

            </div>


            {/* TEACHERS SIGN UP MODAL */}

            <Modal
            isOpen={isFormOpen}
            onRequestClose={toggleFormModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='e-form'>
              <div className='e-form1'>
                <div className='close'>
                  <button onClick={() => setFormIsOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form>

                  <h4>New Employee</h4>
                  <AddTeachers/>
                  <input type='submit' value='Add' className='add-submit' />
                
                </form>
                

              </div>

            </div>
            
          </Modal>




          {/* TEACHERS Edit MODAL */}

          <Modal
          isOpen={isEditOpen}
          onRequestClose={toggleEditModal}
          contentLabel="Example Modal"
          className={`bg-transparnt`}
          style={{ 
            overlay: {
              position: "fixed",
              top: "0",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsla(0, 0%, 0%, .8)",
              zIndex:100000,
              
            },
          }}
        >
          <div className='e-form'>
            <div className='e-form1 edit'>
              <div className='close'>
                <button onClick={() => setEditIsOpen(false)} style={{cursor:'pointer'}}>X</button>
              </div>

              <form>

                <h4>PROFILE</h4>
                <EditTeacherProfile/>
                <input type='submit' value='Edit' className='add-submit' />
              
              </form>
              

            </div>

          </div>
          
        </Modal>

        </div>
    </div>
  )
}

export default Teachers