import React from 'react'
import { timeAgo } from '../../utils/helper'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'


const SingleBookFeed = ({review}) => {

    let {user, authTokens} = useContext(AuthContext)

    const queryClient = useQueryClient()


    const mutatation = useMutation({
        mutationFn: (id) => handleDelete(id),
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['reviews'] })
        }
     })

    const handleDelete = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/book-review/${id}/delete/`, {
            method:'DELETE',
            headers: {
              'Authorization': `Bearer ${authTokens.access}`
            }
        })  
    }

  return (
        <div className='border p-10 shadow-md flex flex-col justify-between' key={review.id}>
            <div className='flex justify-between'>
              <div className='lg:flex lg:gap-4 lg:items-center '>
                <p className='text-indigo-400 text-lg '>@{review?.username}</p>
                <p className='border inline-block px-2 rounded-xl mt-2 md:mt-4 lg:mt-0 bg-stone-400 text-white '>{review?.genre_name}</p>
              </div>
              <small className='mt-1'>{timeAgo(review.created)}</small>
            </div>
     
            <p className='uppercase mt-4 text-2xl font-semibold '>{review?.book_title}</p>
            <small className='text-base'>{review?.review_title}</small>
            <p className='mt-10'>{review?.body.slice(0, 100)}...</p>
            
            <div className='flex justify-between'>
                <button className='mt-10 bg-indigo-400 text-white border p-2 px-4 rounded-xl hover:bg-indigo-500 shadow-lg'><Link to={`/review/${review.id}`}>Join this review</Link></button>
                {user.user_id === review?.creator ? 
                <button className='mt-10 bg-red-400 text-white border p-2 px-4 rounded-xl hover:bg-red-500 shadow-lg' onClick={() => mutatation.mutate(review.id)}>Delete</button> 
                : null}
            </div>
          
        </div>

  )
}

export default SingleBookFeed