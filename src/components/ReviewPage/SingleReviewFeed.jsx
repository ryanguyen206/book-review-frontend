import React from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest, timeAgo } from '../../utils/helper';
import Comment from './Comment';

const SingleReviewFeed = ({id}) => {

    const url =  `${import.meta.env.VITE_URL}/api/book-review/${id}/messages/`

    const {data : comments} = useQuery({
        queryKey: ['messages', id],
        queryFn: () => handleGetRequest(url),
    })

    return (
        <div className='p-5 md:p-10'>
            <Comment id={id} comments={comments}/>
            { comments && comments?.length > 0 && 
                <div className='b'>
                    {comments.map(message => (
                        <div key={message.id} className='p-10 my-7 bg-gray-100 text-black'>
                            <div className='flex flex-col md:flex-row md:justify-between'>
                                <p className='order-2 md:order-1 text-indigo-400'>@{message?.username} says:</p> 
                                <small className='order-1 md:order-2'>{timeAgo(message.created)}</small>           
                            </div>
                     
                            <p className='mt-2 tracking-tighter'>{message.body}</p>
                        </div>
                  
                    ))}
               
                </div>       
            }
        </div>
    
    )
}

export default SingleReviewFeed