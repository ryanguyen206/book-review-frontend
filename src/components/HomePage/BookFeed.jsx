import React, { useState } from 'react';
import SingleBookFeed from './SingleBookFeed';
import useGetAllReviews from '../../hooks/useGetAllReviews';
import ReviewSkeleton from '../ReviewSkeleton';
import Pagianation from './Pagianation';

const BookFeed = ({ currentGenre,currentPage, setCurrentPage}) => {
  const { data, isFetching } = useGetAllReviews();
  const filteredReviews = currentGenre ? data?.filter((review) => review.genre_name === currentGenre) : data;

  // Pagination
  const [numberOfBooks] = useState(6);
  const endIndex = currentPage * numberOfBooks;
  const startIndex = endIndex - numberOfBooks;
  const currentExercises = filteredReviews?.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil((filteredReviews?.length || 0) / numberOfBooks); 

  return (
    filteredReviews && filteredReviews.length === 0 ? 
      <p className='text-center my-60 text-stone-500 text-2xl uppercase'>No book reviews</p> :
      <>
        <div className='gap-8 my-20 grid lg:grid-cols-2  text-stone-500 font-medium'>
          {isFetching ?  
            <LoadingUI/> : 
            currentExercises.map(review => (
              <SingleBookFeed key={review.id} review={review}/>
            ))
          }
        </div>
        <div>
          <Pagianation
            numberOfPages={numberOfPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
     
        </div>
      </>
  );
};

export default BookFeed;

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
