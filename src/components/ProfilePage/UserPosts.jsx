import React from 'react'
import SingleReviewHeader from '../ReviewPage/SingleReviewHeader'
import ReviewSkeleton from '../ReviewSkeleton'


const UserPosts = ({userPosts, isFetching}) => {

  
  if (isFetching) {
    return (
        <div className='mt-28 md:col-span-3'>
            <ReviewSkeleton /> 
            <br/>
            <ReviewSkeleton /> 
            <br/>
            <ReviewSkeleton /> 
        </div>
    ) 

}

  return (
    <div className='mt-10 md:col-span-3'>
        <h2 className='text-center md:text-start text-xl mt-10 mb-4'>Your Reviews</h2>
        {userPosts && userPosts.length > 0 ? userPosts?.map(posts => (
            <div className='border mb-10' key={posts.id}>
                <SingleReviewHeader id={posts.id} url={`${import.meta.env.VITE_URL}/api/book-review/${posts.id}/`} onProfilePage={true}/>
            </div>
        )) : <p className='text-center md:text-start'>You haven't wrote any reviews yet!</p>}
    </div>
  )
}

export default UserPosts