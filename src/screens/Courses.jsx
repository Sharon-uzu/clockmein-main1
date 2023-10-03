import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import SearchInput from '../Components/SearchInput';
import Filter from '../Components/Filter';
import Modal from "react-modal";
import AddCourse from '../Components/AddCourse';

const Courses = () => {


    // ADD COURSE MODAL

    const [isFormOpen, setFormIsOpen] = useState(false);
        const toggleFormModal = () => {
        setFormIsOpen(!isFormOpen);
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
              

                <div className='course-card'>

                    <h2>Courses</h2>

                    <div className='course-list'>
                    
                        <span>Digital Marketting</span>
                        <span>Product Design</span>
                        <span>Frontend Development</span>
                        <span>Data Analysis</span>
                        <span>Backend Development</span>
                        <span>Digital Marketting</span>
                        <span>Digital Marketting</span>
                        <span>Product Design</span>
                        <span>Frontend Development</span>
                    
                    </div>

                    <div className='add-courses'>
                        <button onClick={() => setFormIsOpen(true)} style={{cursor:'pointer'}}>Add Courses</button>
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
               <div className='e-form1 edit'>
                 <div className='close'>
                   <button onClick={() => setFormIsOpen(false)} style={{cursor:'pointer'}}>X</button>
                 </div>
                 
                 <form>
 
                   <h4>New Course</h4>
                   <AddCourse/>
                   <input type='submit' value='Add' className='add-submit' />
                 
                 </form>
                 
 
               </div>
 
             </div>
             
           </Modal>
              

            </div>
        </div>
    </div>
  )
}

export default Courses