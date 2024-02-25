import React from 'react'

const Skeleton = () => {
  return (
    <div className='shadow border-gray-200 p-4 text-center'>
        <div className='animate-pulse w-20 text-center m-auto'>
            <div className='w-5/6 border h-4 mb-4 bg-gray-200 text-center'></div>
            <div className='w-5/6 border h-4 bg-gray-200'></div>
        </div>
    </div>
    
  )
}

export default Skeleton