import React,{useState} from 'react';
import menu from '../Images/menu.png';
import { CgMenuGridR } from "react-icons/cg";
import { FaChalkboardTeacher, FaBars} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import { MdCommentBank } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';




const Sidebar = () => {


  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen (!isOpen);

 

  return (

    <div className='top'>
      
      <div className='side' style={{width:isOpen ? "70px" : "300px"}}>


        <div className='bar'>
          <span><FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/></span>
        </div>
      
        {/* <NavLink to= '/' className='link' activeclassName = 'active'>
          <div className='bar' >
            <span><CgMenuGridR className='icon'/></span>
            <span className='text'>Menu</span>
          </div>
        </NavLink> */}

        <NavLink to= '/Teachers' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><FaChalkboardTeacher className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Teachers</span>
          </div>
        </NavLink>

        <NavLink to= '/Students' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><BsFillPersonFill className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Students</span>
          </div>
        </NavLink>

        <NavLink to= '/Classes' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><GiBookshelf className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Ongoing classes</span>
          </div>
        </NavLink>

        <NavLink to= '/Courses' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><ImBooks className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Courses</span>
          </div>
        </NavLink>

        <NavLink to= '/' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><TbReport className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Class reports</span>
          </div>
        </NavLink>

        <NavLink to= '/Comment' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><MdCommentBank className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Comments</span>
          </div>
        </NavLink>

        <NavLink to= '/Schedule' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><AiFillSchedule className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Class schedule</span>
          </div>
        </NavLink>

        <NavLink to= '/' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><AiFillSetting className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Set Up</span>
          </div>
        </NavLink>

        <NavLink to= '/' className='link' activeclassName = 'active'>
          <div className='bar'>
            <span><BsFillPersonPlusFill className='icon'/></span>
            <span className='text' style={{display:isOpen ? "none" : "block"}}>Registration</span>
          </div>
        </NavLink>


      
      </div>
    </div>
  )
}

export default Sidebar