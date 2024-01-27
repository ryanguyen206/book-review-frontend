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
        const res = await fetch(`${import.meta.env.VITE_URL}/api/book-review/${id}/delete/`, {
            method:'DELETE',
            headers: {
              'Authorization': `Bearer ${authTokens.access}`
            }
        })  
    }

  return (
        <div className='border p-10 shadow-md flex flex-col justify-between' key={review.id}>
            <div className='flex flex-col justify-center md:flex-row md:justify-between'>
              <div className='order-2 md:order-1 md:flex md:gap-4 md:items-center '>
                <p className='text-indigo-400 text-lg mt-2 md:mt-0 '>@{review?.username}</p>
                <p className='border inline-block px-2 rounded-xl mt-3 md:mt-0 bg-stone-400 text-white '>{review?.genre_name}</p>
              </div>
              <small className='order-1 md:order-2'>{timeAgo(review.created)}</small>
            </div>
     
            <p className='uppercase mt-4 text-3xl font-semibold '>{review?.book_title}</p>
            <small className='text-lg'>{review?.review_title}</small>
            <p className='mt-10 text-xl'>{review?.body.slice(0, 100)}...</p>
            
            <div className='flex flex-col sm:flex-row justify-between '>
                <button className='w-44 sm:w-auto mt-10 bg-indigo-400 text-white border p-2 px-4 rounded-xl hover:bg-indigo-500 shadow-lg'><Link to={`/review/${review.id}`}>Join this review</Link></button>
                {user.user_id === review?.creator ? 
                <button className='w-44 sm:w-auto mt-4 sm:mt-10 bg-red-400 text-white border p-2 px-4 rounded-xl hover:bg-red-500 shadow-lg' onClick={() => mutatation.mutate(review.id)}>Delete</button> 
                : null}
            </div>
          
        </div>

  )
}

export default SingleBookFeed