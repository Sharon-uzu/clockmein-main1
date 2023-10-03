import React from 'react';
import { AiOutlineSearch} from "react-icons/ai";


const SearchInput = () => {
  return (
    
    <div className='search'>
        <AiOutlineSearch/>
        <input type='search' placeholder='Search teachers'/>
  
    </div>
  )
}

export default SearchInput