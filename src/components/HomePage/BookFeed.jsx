import React from 'react'
import SingleBookFeed from './SingleBookFeed'
import useGetAllReviews from '../../hooks/useGetAllReviews';
import ReviewSkeleton from '../ReviewSkeleton';

const BookFeed = ({currentGenre}) => {


  const {data, isFetching} = useGetAllReviews()
  const filteredReviews = currentGenre ? data.filter((review) => review.genre_name === currentGenre) : data;

  
  

  return (
    
      filteredReviews && filteredReviews.length === 0 ? <p className='text-center my-60 text-stone-500 text-2xl uppercase'>No book reviews</p> :
      <div className='gap-8 my-20 grid lg:grid-cols-2 lg:grid-rows-2 text-stone-500 font-medium'>
        {isFetching ?  <LoadingUI/>: filteredReviews?.map(review => (
             <SingleBookFeed key={review.id} review={review}/>
        )) }
  
      </div>
  )
}

export default BookFeed


const LoadingUI = () => (
  <>
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
  </>
);