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
        <div className='p-10  mt-10'>
            <Comment id={id} comments={comments}/>
            { comments && comments?.length > 0 && 
                <div className=''>
                    {comments.map(message => (
                        <div key={message.id} className=' my-10  text-black'>
                            <div className='flex items-center align-middle gap-6'>
                                <p className='font-bold'>@{message?.username}</p> 
                                <small className=''>{timeAgo(message.created)}</small>           
                            </div>  
                            <p className='mt-2 text-lg'>{message.body}</p>
                        </div>
                    ))}
                </div>       
            }
        </div>
    
    )
}

export default SingleReviewFeed