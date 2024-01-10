import React from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest, timeAgo } from '../../utils/helper';
import Comment from './Comment';

const SingleReviewFeed = ({id}) => {

    const url =  `${process.env.REACT_APP_API}/api/book-review/${id}/messages/`

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
                            <div className='flex justify-between'>
                                <p className='text-indigo-400'>@{message?.username} says:</p>
                                <small>{timeAgo(message.created)}</small>                            
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