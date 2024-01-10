import React, {useContext} from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest, timeAgo } from '../../utils/helper'
import Comment from './Comment'


const SingleReviewHeader = ({id}) => {


  const url = `${import.meta.env.VITE_URL}/api/book-review/${id}`

  const {data : review} = useQuery({
    queryKey:['review', id],
    queryFn: () => handleGetRequest(url),
  })

  return (
    <>
      <>
        {review && 
            <div className='p-10'>
                <div className='flex justify-between items-center'>
                  <p className='uppercase mt-4 text-2xl font-semibold mb-2 '>{review?.book_title}</p>
                  <small className='font-light text-base'>{timeAgo(review.created)}</small>
                </div>
                <p className='text-indigo-400 mb-2'>Hosted by: {review?.username}</p>
                <p className='border px-2 rounded-xl bg-stone-400 text-white inline-block'> {review?.genre_name}</p>
                <p className='mt-6 font-medium'>{review?.body}</p>
            </div>
        }
      </>
    </>
  )
}

export default SingleReviewHeader