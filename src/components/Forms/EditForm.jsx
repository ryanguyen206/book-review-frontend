import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useGenre from '../../hooks/useGenre'
import { useMutation, useQueryClient } from 'react-query';
import useInputChange from '../../hooks/useInputChange';
import ReusableForm from './ReusableForm';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


const EditReviewForm = ({id, review}) => {

    let {user, authTokens} = useContext(AuthContext)
    let {genres} = useGenre()
    const queryClient = useQueryClient();

    const navigate = useNavigate()

    const { inputValues, handleInputChange} = useInputChange({
      book_title: review?.book_title || "",
      review_title: review?.review_title || "",
      genre: review?.genre || "",
      body: review?.body || "",
    });

    const mutation = useMutation({
      mutationFn: (e) => handleEdit(e),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['reviews'] })
      }
    })

    const handleEdit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${import.meta.env.VITE_URL}/api/book-review/${id}/update/`, {
          method:'PUT',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
          body: JSON.stringify({
            creator:user.user_id,
            book_title:inputValues.book_title,
            review_title:inputValues.review_title,
            genre: inputValues.genre,
            body: inputValues.body
          })
        })
        if (res.status === 200) {
          toast.success('Review Updated');
          navigate('/profile')
        }
    }

    const formFields = [
      { name: 'book_title', label: 'Book Title', type: 'text', required: true },
      { name: 'genre', label: 'Genre', type: 'select', options: genres, required: true },
      { name: 'review_title', label: 'Review Title', type: 'text', required: true },
      { name: 'body', label: 'Review', type: 'textarea', required: true },
    ];


  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Edit your review
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <ReusableForm
             formState={inputValues}
             handleChange={handleInputChange}
             handleSubmit={(e) => mutation.mutate(e)}
             formFields={formFields}
             buttonText={'Update Review'}
             mutation = {mutation}
             message={'Updating Review...'}
        />
      </div>
    </div>
  </>
  )
}

export default EditReviewForm