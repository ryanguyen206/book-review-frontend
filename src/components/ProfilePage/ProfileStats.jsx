import React from 'react'
import ReviewSkeleton from '../ReviewSkeleton'
import Skeleton from '../Skeleton'
Skeleton


const ProfileStats = ({totalViewCount, userPosts, isFetching}) => {


  return (
    <>
    <h1 className='text-center text-2xl mt-10 mb-4'>Your Stats</h1>
    <hr/>
    <div className='flex flex-col md:text-start md:flex-row md:justify-around mt-20 mb-20 gap-10 w-1/2 mx-auto'>
    {isFetching ? (
        <>
            <Skeleton />
            <Skeleton />
        </>
    ) : (
        <>
            <div className='flex flex-col items-center'>
                {totalViewCount > 0 ? (
                    <p className='text-2xl font-bold mb-4 text-indigo-500'>{totalViewCount}</p>
                ) : (
                    <p className='text-2xl font-bold mb-4 text-indigo-500'>0</p>
                )}
                <p className='text-xl text-indigo-500 tracking-tighter'>Total Views</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {userPosts && (
                    <p className='text-2xl font-bold mb-4 text-indigo-500'>{userPosts?.length}</p>
                )}
                <p className='text-xl text-indigo-500 tracking-tighter '>Total Book Reviews</p>
            </div>
        </>
    )}
</div>

       <hr/>
    </>

  )
}

export default ProfileStats