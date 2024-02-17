import React from 'react'
import EditForm from '../components/Forms/EditForm'
import useGetOneReview from '../hooks/useGetOneReview'
import { useParams } from 'react-router-dom'


const EditPage = () => {

    let {id} = useParams()
    const url = `${import.meta.env.VITE_URL}/api/book-review/${id}/`
    const {review} = useGetOneReview(id, url)

  return (
    <div>
        {review && <EditForm review={review} id={id}/>}
    </div>
  )
}

export default EditPage