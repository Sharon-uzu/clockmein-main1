import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import SearchInput from '../Components/SearchInput';
import refresh from '../Images/refresh.png';
import { BsFillPinFill } from "react-icons/bs";


const Comment = () => {

  const Comments = [
    {
        name: 'Ngowari princess - ',
        text: "I noticed that the teacher did not chek our assignments",
        time: '05:15am'

    },

    {  
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
     
    {  
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },

    {
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
     
    {
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
      
      
    
];

  return (
    <div>
      <Header/>
      <div className='content'>
        <div className='dark'></div>
        <Sidebar/>
        <div className='right-content'>
          <div className='comment-top'>
            <div className='search-comment'>
              <SearchInput />
              <img src={refresh}/>

            </div>
          
          </div>

          <h2 className='c-title'>Students Comment</h2>

          <div className='comment-box'>
            {Comments && Comments.map(({name,text,time},index)=>{

              return(
                <div className='comment-list'>
                  <div className='details'>
                    <BsFillPinFill/>
                    <h3>{name}</h3>
                    <p>{text}</p>
                
                  </div>

                  <div className='time'>
                    <p>{time}</p>
                  </div>
                
                </div>

              )
            })}
            
          </div>

         <button classname='add-comment'>Add Comment</button>
        
        </div>
    </div>
    </div>
  )
}

export default Comment