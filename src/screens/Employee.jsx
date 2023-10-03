import React, {useState} from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import sun from '../Images/sun.png';
import Filter from '../Components/Filter';
import SearchInput from '../Components/SearchInput';
import edit from '../Images/edit.png';
import back from '../Images/back.png'
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import EditTeacherProfile from '../Components/EditTeacherProfile';





const Employee = () => {

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

     // TEACHER Edit MODAL

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
            <div className='top'>

                <div className='top1'>
                <Link to='/Teachers'><img src={back} style={{width:'25px', height:'25px'}}/></Link>
                </div>

                <SearchInput/>

                <Filter/>

            </div>

            <div className='add'>
               
            </div>

            <div className='employee'>
            
                <h2>Employees</h2>
            
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

            
          
            </div>


            

          
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
</div>
  )
}

export default Employee