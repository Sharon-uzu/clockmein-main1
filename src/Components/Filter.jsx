import React from 'react';
import { MdFilterAlt} from "react-icons/md";


const Filter = () => {
  return (
    <div className='filter'>

        <div>
            <MdFilterAlt/>
            <p>Filter</p>
        </div>

        <select>
            <option></option>
            <option></option>
            <option></option>
        </select>
                  
    </div>
  )
}

export default Filter