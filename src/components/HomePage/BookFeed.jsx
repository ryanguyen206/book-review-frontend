import React from 'react'
import {useQuery} from 'react-query'
import { handleGetRequest } from '../../utils/helper'
import SingleBookFeed from './SingleBookFeed'




const BookFeed = ({currentGenre}) => {


  const {data} = useQuery({
      queryKey:['reviews'], 
      queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/book-review/`),
  })

  const filteredReviews = currentGenre ? data.filter((review) => review.genre_name === currentGenre) : data;

  return (
    
      filteredReviews && filteredReviews.length === 0 ? <p className='text-center my-20 text-stone-500 text-2xl uppercase'>No book reviews</p> :
      <div className=' gap-8 mt-20 grid lg:grid-cols-2 lg:grid-rows-2 text-stone-500 font-medium'>
        {filteredReviews?.map(review => (
        
             <SingleBookFeed key={review.id} review={review}/>
      
     
        ))}
      </div>
  )
}

export default BookFeed