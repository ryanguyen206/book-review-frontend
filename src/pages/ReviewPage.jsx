import React from 'react'
import { useParams } from 'react-router-dom';
import SingleReviewHeader from '../components/ReviewPage/SingleReviewHeader'
import SingleReviewFeed from '../components/ReviewPage/SingleReviewFeed';

const ReviewPage = ({}) => {

    let { id } = useParams();
    const url = `${import.meta.env.VITE_URL}/api/book-review/${id}/?source=review`

    return (
        <div className='md:p-10 border'>
            <SingleReviewHeader id={id} url={url} onProfilePage={false}/>
            <SingleReviewFeed id={id}/>
        </div>
    )
}

export default ReviewPage