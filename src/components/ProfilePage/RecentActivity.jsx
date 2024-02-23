import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest, timeAgo } from '../../utils/helper'



const RecentActivity = ({user}) => {

    const getCommentsURL =  `${import.meta.env.VITE_URL}/api/book-review/${user.user_id}/userMessages/`
    const [myComments, setComments] = useState([])

    const {data : comments} = useQuery({
        queryKey: ['myComments', user.username],
        queryFn: () => handleGetRequest(getCommentsURL),
        onSettled: (comments) => {
            
            let filteredMessages = comments.filter(aUser => aUser.user !== user.user_id)
            setComments(filteredMessages)
        }
    })

  return (
        <div className='mt-10 md:col-span-2'>
        <h2 className='text-xl mt-10 mb-4 text-center md:text-start'>Recent Activity</h2>
            <div className='mt-5'>
                {myComments && myComments.length > 0 ? 
                    myComments?.map(oneComment => (
                        <div className='mt-5' key={oneComment.id}>
                            <small>{timeAgo(oneComment.created)}</small>
                            <p className=''><span className='font-semibold'>{oneComment.username} </span>said '{oneComment.body}' on <i>{oneComment.book_review.book_title} </i></p>
                            <hr className='mt-4'/>
                        </div>
                    ))
                : "No one has commented on any of your posts yet"}
            </div>
    
        </div>

  )
}

export default RecentActivity