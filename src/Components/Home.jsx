import React from 'react'
import AddEmployee from './AddEmployee'
import Card from './Card'


const  Home= () => {

  return (
   <div className="container mx-0 my-0 flex flex-col bg-orange-100 h-screen w-full align-center justify-center">
      <div className="h-[90%] w-[80%] self-center bg-orange-300 mx-10 my-10 border-2 border-orange-700 rounded-xl justify-center  flex gap-y-2 ">
        {/* <button type='button' onClick={<AddEmployee/>}>Add New Employee</button> */}<AddEmployee/>
        <div className='h-80 w-[3px] rounded-xl self-center bg-orange-700 flex'></div>
<Card/>
{/* <Card/>
<div className='h-400 w-5 bg-zinc-300'></div>
<Card/> */}

      </div>
   </div>
  )
}

export default Home