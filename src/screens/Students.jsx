import React, {useState} from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import sun from '../Images/sun.png'
import Filter from '../Components/Filter';
import SearchInput from '../Components/SearchInput';
import Modal from "react-modal";
import AddStudent from '../Components/AddStudent';
import edit from '../Images/edit.png';
import EditStudentProfile from '../Components/EditStudentProfile';


const Students = () => {
  const Students = [
    {
        img: sun,
        name: 'Ngowari Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'princessngowari@gmail.com',
        days: 'Mon, Thurs',
        classDuration:'3months',
        totalClass:'24',
        presentClass:'0',
        missedClass:'0',
        edit:edit

    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Wed, Fri',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

    },
     
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, wed',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

    },

    {
      img: sun,
      name: 'Glory Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'gloryngowari@gmail.com',
      days: 'Mon, Fri',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

  },

  {
    img: sun,
    name: 'Ngowari Princess',
    role: "Product Designer",
    tel: '+23423456789',
    email: 'princessngowari@gmail.com',
    days: 'Tues, wed',
    classDuration:'3months',
    totalClass:'24',
    presentClass:'0',
    missedClass:'0',
    edit:edit
  }
      
    
];


// TEACHER SignUp MODAL

const [isFormOpen, setFormIsOpen] = useState(false);
const toggleFormModal = () => {
  setFormIsOpen(!isFormOpen);
};

// STUDENT EDIT MODAL

const [isEditOpen, setEditIsOpen] = useState(false);
    const toggleEditModal = () => {
      setEditIsOpen(!isEditOpen);
    };



  


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

              <div className='add'>
              <button onClick={() => setFormIsOpen(true)} style={{cursor:'pointer'}}>Add Students</button>
              </div>

              <div className='employee'>
              
                <h2>Students</h2>
              
                <div className='cards'>

                {Students && Students.map(({img,name,role,tel,email,days,classDuration,totalClass,presentClass,missedClass},index)=>{
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

                        <div className='count'>
                          <div className='count-left'>
                            <p>Class duration</p>
                            <h3>{classDuration}</h3>
                          </div>
                          <div className='count-left'>
                            <p>Total classes</p>
                            <h3>{totalClass}</h3>
                          </div>
                        </div>


                        <div className='count'>
                          <div className='count-left'>
                            <p style={{color:'green'}}>Class Present</p>
                            <h3>{presentClass}</h3>
                          </div>
                          <div className='count-left'>
                            <p style={{color:'red'}}>Class Missed</p>
                            <h3>{missedClass}</h3>
                          </div>
                        </div>

                      </div>

                    </div>

                    )
                  })}
                    


                </div>

                
              
              </div>


              

              {/* STUDENTS SIGN UP MODAL */}

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
 
                   <h4>New Students</h4>
                   <AddStudent/>
                   <input type='submit' value='Add' className='add-submit' />
                 
                 </form>
                 
 
               </div>
 
             </div>
             
           </Modal>
              

              
             {/* STUDENTS Edit MODAL */}

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
                <EditStudentProfile/>
                <input type='submit' value='Edit' className='add-submit' />
              
              </form>
              

            </div>

          </div>
          
        </Modal>


            </div>


             

        </div>
    </div>
  )
}

export default Students