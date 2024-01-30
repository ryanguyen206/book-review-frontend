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
                <h1 className='font-bold text-xl'>@{review?.username}</h1>
                <p className='uppercase mt-4 text-2xl font-medium mb-4'>{review?.book_title}</p>
                <p className='px-2.5 py-1.5 rounded-xl bg-stone-400 text-white text-sm inline-block mr-4'> {review?.genre_name}</p> 
                <p className='px-2.5 py-1.5 rounded-xl bg-stone-400 text-white text-sm inline-block mr-4'> {review?.view_count} views</p>
                <p className='px-2.5 py-1.5 rounded-xl bg-stone-400 text-white text-sm inline-block'> {timeAgo(review.created)}</p>
                <p className='mt-10  text-xl'>{review?.body}</p>
            </div>
        }
      </>
    </>
  )
}

export default SingleReviewHeader