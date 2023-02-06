import React, { useState } from 'react';
const AddEmployee = () => {
  
[formData, setFormData]= useState({
   name:"",
phone:"",
cnic:"",
designation:"",
joining:"",
status:"",
fuel:"",
insurance:"",
accomodation:""
});
  
const onChange=(e)=>{
   setFormData({...formData, [e.target.name]:e.target.value})
}
  
   return (
 <div className='container mx-auto flex-row '>
      <div className='text-center mt-2 pt-4 text-xl font-semibold text-black-200'>
        <h1>Add Employee</h1></div>
        <div className=' justify-center w-[90%] h-[85%] box-border border-orange-700 border-2 overflow-hidden rounded-xl mx-10 px-8 py-6 ' >
         <form>
         <label ><b>Personal Details</b></label><br/>
        <input name='name' placeholder='Full Name' type={"text"} className='flex-1 placeholder:text-orange-700 focus:outline-none'/>
         <input name='phone' placeholder='Phone Number' type={"tel"} className='flex-1 placeholder:text-orange-700 focus:outline-none'/><br/>
         <input name='cnic' placeholder='CNIC' type={"text"} className='flex-1 placeholder:text-orange-700 focus:outline-none'/>
        <input name='designation' placeholder='Designation'className='flex-1 placeholder:text-orange-700 focus:outline-none'/>
        <div className='w-[80%] h-[2px] mx-8 my-5 bg-orange-700'></div>
       
       
       
       <div className='flex-col h-5 items-start'> 
     
        <label><b>Benifits</b></label><br/>
        <div className="flex-row">
   <div className='flex items-start'>
         <div className="flex h-5 items-center">
            <input  name='fuel' type={"checkbox"} />
             </div>
             <div className="ml-1 text-sm">
               <label className="font-medium text-orange-700">Fuel Card</label>
            </div>
</div>
   <div className='flex items-start'>
         <div className="flex h-5 items-center">
            <input  name='accomodation' type={"checkbox"} />
             </div>
             <div className="ml-1 text-sm">
               <label  className="font-medium text-orange-700">Accomodation</label>
            </div>
</div>
   <div className='flex items-start '>
         <div className="flex h-5 items-center">
            <input  name='insurance' type={"checkbox"} />
             </div>
             <div className="ml-1 text-sm ">
               <label  className="font-medium text-orange-700">Health Insurance</label>
            </div>
</div>
</div>
    <div className='flex items-start my-8'>
      <div className="ml-1 text-sm"><label className="font-semibold text-orange-700">Date Joined :</label></div>
      <div className="flex h-1 items-center ">   <input name='joining' type={"date"} className="placeholder:text-orange-700 focus:outline-none"/></div>
     
    </div>
<div className='flex items-start my-8 '>
     <div className="ml-1 text-sm"><label className="font-semibold text-orange-700">Active Status :</label></div>
      <div>
      <select name='status' className=" bg-transparent border rounded-md mx-2 border-orange-500 py-1 px-3 shadow-sm focus:border-orange-700 focus:outline-none focus:ring-orange-700 sm:text-sm">
         <option>Active</option>
<option>In-Active</option>
         </select></div>
         
         </div>
         <div className='flex justify-center'>
<button onClick={onChange} type={"submit"} className="h-8 w-24 rounded-xl py-1 items-center px-2 bg-orange-700 " >Submit</button>
      </div></div>
 
  </form>
 </div>

 
    </div>
  )
}

export default AddEmployee