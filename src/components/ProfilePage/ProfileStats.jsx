import React from 'react'

const ProfileStats = ({totalViewCount, userPosts}) => {
  return (
    <div className='flex justify-around mt-20 gap-10 w-1/2 mx-auto'>
        <div className='flex flex-col items-center'>
          {totalViewCount && <p className='text-2xl font-bold mb-4 text-indigo-500 '>{totalViewCount}</p>}
          <p className='text-xl text-indigo-500 tracking-tighter'>Total Views</p>
         
        </div>
   
        <div className='flex flex-col justify-center items-center'>
          {userPosts && <p className='text-2xl font-bold  mb-4 text-indigo-500'>{userPosts?.length}</p>}
          <p className='text-xl text-indigo-500 tracking-tighter '>Total Book Reviews</p>
    
        </div>

    </div>
  )
}

export default ProfileStats