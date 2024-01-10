import React from 'react'
import { useParams } from 'react-router-dom';
import SingleReviewHeader from '../components/ReviewPage/SingleReviewHeader'
import SingleReviewFeed from '../components/ReviewPage/SingleReviewFeed';

const ReviewPage = ({}) => {

    let { id } = useParams();

    return (
        <div className='md:p-10 bg-gray-200'>
            <SingleReviewHeader id={id}/>
            <SingleReviewFeed id={id}/>
        </div>
    )
}

export default ReviewPage