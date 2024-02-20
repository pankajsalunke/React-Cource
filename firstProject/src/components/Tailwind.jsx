import React from 'react'

function Tailwind() {
  return (
    <div className='grid  sm:grid-cols-12 gap-2 '>
      <div className="min-h-[100px] bg-orange-400 rounded-md m-1 sm:col-span-3 ">
        <div className='px-4 py-4'>
          <p className='flex items-center justify-center  p-3 rounded-md t  text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repudiandae animi repellat tenetur eius quae laboriosam quisquam? Doloribus, consectetur officia!S</p>
          </div>
      </div>

      <div className="min-h-[100px] bg-orange-500 rounded-md m-1 sm:col-span-6 ">
        <div className='grid sm:grid-cols-3 gap-1 mx-4 my-4'>
        <div className='min-h-[50px] bg-red-600 rounded-md'></div>
        <div className='min-h-[50px] bg-red-600 rounded-md'></div>
        <div className='min-h-[50px] sm:min-h-[300px] bg-red-600 rounded-md'></div>
        </div>
      </div>

      <div className="min-h-[100px] bg-orange-500 rounded-md m-1 sm:col-span-3 transition-shadow"></div>
    </div>
  )
}

export default Tailwind
