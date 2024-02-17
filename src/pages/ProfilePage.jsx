import React, {useContext, useState} from 'react'
import { handleGetRequest } from '../utils/helper'
import AuthContext from '../context/AuthContext'
import { useQuery } from 'react-query'
import ProfileStats from '../components/ProfilePage/ProfileStats'
import SingleReviewHeader from '../components/ReviewPage/SingleReviewHeader'





const ProfilePage = () => {

    const {user} = useContext(AuthContext)
    const getAllUserPostsURL =  `${import.meta.env.VITE_URL}/api/book-review/user/${user.user_id}`

    const [totalViewCount, setTotalViewCount] = useState(null)

    const {data : userPosts} = useQuery({
        queryKey: ['reviews', user.username],
        queryFn: () => handleGetRequest(getAllUserPostsURL),
        onSuccess: (userPosts) => {
            let tempCount = 0
            for (let i=0; i<userPosts.length; i++) {
                tempCount += parseInt(userPosts[i].view_count)
            }
            setTotalViewCount(tempCount)
        }
    })


    
  return (
    <div>
        <h1 className='text-center text-2xl mt-10 mb-4'>Your Stats</h1>
        <hr/>

        <ProfileStats userPosts={userPosts} totalViewCount={totalViewCount} onProfilePage={true}/>
        <hr/>
  
        <div className='lg:grid lg:grid-cols-3 gap-x-12'>
            <div className='mt-10 md:col-span-2'>
                <h2 className='text-center md:text-start text-xl mt-10 mb-4'>Posts by you</h2>
                {userPosts?.map(posts => (
                    <div className='border mb-10' key={posts.id}>
                        <SingleReviewHeader id={posts.id} url={`${import.meta.env.VITE_URL}/api/book-review/${posts.id}/`} onProfilePage={true}/>
                    </div>
            
                ))}
            </div>

            <div className='mt-10 lg:col-span-1 text-center'>
                <h2 className='text-xl mt-10 mb-4'>Recent Activity</h2>
            </div>
        </div>
      
    </div>
  )
}

export default ProfilePage



