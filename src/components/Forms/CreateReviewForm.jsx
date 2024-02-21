import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useGenre from '../../hooks/useGenre'
import { useMutation, useQueryClient } from 'react-query';
import useInputChange from '../../hooks/useInputChange';
import ReusableForm from './ReusableForm';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateReviewForm = () => {

    let {user, authTokens} = useContext(AuthContext)
    let {genres} = useGenre()

    const queryClient = useQueryClient();



    const { inputValues, handleInputChange, resetForm} = useInputChange({
      book_title: '',
      review_title: '',
      genre: 1,
      body: '',
    });

    const mutation = useMutation({
      mutationFn: (e) => handleSubmit(e),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['reviews'] })
      }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${import.meta.env.VITE_URL}/api/book-review/`, {
          method:'POST',
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
        if (res.status === 201) {
          resetForm()
          toast.success('Review Created');
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
          Create your book review
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <ReusableForm
             formState={inputValues}
             handleChange={handleInputChange}
             handleSubmit={(e) => mutation.mutate(e)}
             formFields={formFields}
             buttonText={'Create Review'}
             mutation = {mutation}
             message={'Creating Review...'}
        />
      </div>
    </div>
  </>
  )
}

export default CreateReviewForm