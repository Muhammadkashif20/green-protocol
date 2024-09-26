import React from 'react'
import image1 from '../Images/Solution1.png' 
const Solution = () => {
  return (
    <div className='Solution'>
       <h1 className='text-green-600 font-bold text-5xl ms-[8rem] mt-2 ' >Solution</h1>
         <div className='bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md'></div>
         <div className='flex flex-row ms-[9rem] gap-0 mt-12'>
         <div className='card bg-green-600 w-[14.5rem] h-[19rem] flex align-middle justify-center pt-2 flex-col'>
          <img src={image1} className='h-[10rem] w-[10rem] ms-[2.2rem] my-3'/>
            <h1 className='text-center text-white text-2xl font-bold'>Green <br/>Energy</h1>

         </div>
         <div className='card bg-green-500 w-[14.5rem] h-[19rem]'></div>
         <div className='card bg-green-600 w-[14.5rem] h-[19rem]'></div>
         <div className='card bg-green-500 w-[14.5rem] h-[19rem]'></div>
         </div>
         <div className='flex flex-row ms-[9rem] gap-0'>
         <div className='card bg-green-500 w-[14.5rem] h-[19rem]'></div>
         <div className='card bg-green-600 w-[14.5rem] h-[19rem]'></div>
         <div className='card bg-green-500 w-[14.5rem] h-[19rem]'></div>
         <div className='card bg-green-600 w-[14.5rem] h-[19rem]'></div>
         </div>
         
    </div>
 

  )
}

export default Solution
