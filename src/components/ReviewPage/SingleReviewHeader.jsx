import React from 'react'
import { timeAgo } from '../../utils/helper'
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import useDeleteReview from '../../hooks/useDeleteReview';
import useGetOneReview from '../../hooks/useGetOneReview';

const SingleReviewHeader = ({id, url, onProfilePage}) => {


  const {review} = useGetOneReview(id, url)
  const {mutation} = useDeleteReview()


  return (
    <>
      <>
        {review && 
            <div className={`p-10`}>
                {!onProfilePage ? <h1 className='font-bold text-xl'>@{review.username}</h1> :
                  <div className='flex items-center gap-10'>
                      <Link to={`/review/${review.id}`}><BiShow size={24} className='hover:cursor-pointer'/></Link>
                      <Link to={`/edit/${review.id}`}><FaPencil size={16} className='hover:cursor-pointer'/></Link>
                      <MdDelete size={24} className='hover:cursor-pointer' onClick={() => mutation.mutate(id)}/>
                  </div>
                
                }
                <div className='xl:flex gap-10 gap-y-10 items-center'>
                  <p className='uppercase mt-4 text-2xl font-medium mb-4'>{review?.book_title}</p>
                  <div>
                    <p className='px-2.5 py-1.5 mt-2 lg:mt-0 rounded-xl bg-stone-400 text-white text-sm inline-block mr-4'> {review?.genre_name}</p> 
                    <p className='px-2.5 py-1.5 mt-2 lg:mt-0 rounded-xl bg-stone-400 text-white text-sm inline-block mr-4'> {review?.view_count} views</p>
                    <p className='px-2.5 py-1.5 mt-2 lg:mt-0 rounded-xl bg-stone-400 text-white text-sm inline-block'> {timeAgo(review.created)}</p>
                  </div>
                </div>
                <p className='mt-10  text-xl'>{review?.body}</p>
            </div>
        }
      </>
    </>
  )
}

export default SingleReviewHeader