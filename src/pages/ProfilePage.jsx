import React, {Suspense, useContext, useState} from 'react'
import { handleGetRequest } from '../utils/helper'
import AuthContext from '../context/AuthContext'
import { useQuery } from 'react-query'
import ProfileStats from '../components/ProfilePage/ProfileStats'
import RecentActivity from '../components/ProfilePage/RecentActivity'
import UserPosts from '../components/ProfilePage/UserPosts'
import ReviewSkeleton from '../components/ReviewSkeleton'
import Skeleton from '../components/Skeleton'
ReviewSkeleton



const ProfilePage = () => {

    const {user} = useContext(AuthContext)
    const getAllUserPostsURL =  `${import.meta.env.VITE_URL}/api/book-review/user/${user.user_id}`

    const [totalViewCount, setTotalViewCount] = useState(0)

    const {data : userPosts, isFetching} = useQuery({
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
        <ProfileStats isFetching={isFetching} userPosts={userPosts} totalViewCount={totalViewCount} onProfilePage={true}/>
        <div className='lg:grid lg:grid-cols-5 gap-x-12'>
            <UserPosts userPosts={userPosts} isFetching={isFetching}/>
            <RecentActivity user={user}/>
        </div>
    </div>

  )
}

export default ProfilePage



