import React from 'react'
import image1 from '../Images/problem.png'
const Problems = () => {
  return (
    <div className='Probelms w-[26rem] mt-[8rem]'>
      <h1 className='text-green-600 font-bold text-5xl ms-[8rem] mt-2  ' >Problems</h1>
        <div className='bg-green-400 ms-[8rem] w-[60rem] h-1 mt-4 rounded-md'></div>
        <div className='flex flex-row w-[67rem]'>
        <p className='mt-[4rem] ms-[9rem] text-[1.70rem] font-medium text-gray-700  '>Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.</p>
      <img src={image1} className='h-[19rem] ps-8 mt-[3rem] '/>
        </div>
     </div>
  )
}

export default Problems
