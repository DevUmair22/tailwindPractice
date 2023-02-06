import React from 'react'
import { size } from '../theme'
const Card = () => {


  console.log("size",size)
   const classNames= "hover:text-[#c450d2]  border-blue-600 mx-auto my-20 rounded-xl shadow-2xl" + size.home

  return (
     <div className='container mx-auto'>
      <div className= {classNames}  >
        {/* <h1>Add Employee</h1>
        <input placeholder='Full Name'/>
        <input placeholder='Designation'/>
        <input placeholder='Date Joined'/>
        <input placeholder='Status'/>
        <input placeholder='CNIC'/>
        <input placeholder='Phone Number'/> */}
      </div>
    </div>
  )
}

export default Card