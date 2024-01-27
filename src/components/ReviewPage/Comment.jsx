import React, {useRef, useContext} from 'react'
import AuthContext from '../../context/AuthContext';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import useToastNotifications from '../../hooks/useToastNotifications';


const Comment = ({id, comments}) => {

    const inputRef = useRef(null);
    const queryClient = useQueryClient();

    let {user, authTokens} = useContext(AuthContext)

    const mutatation = useMutation({
        mutationFn: (e) => handleSubmit(e),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['messages', id]})
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const inputValue = inputRef.current.value;
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/book-review/${id}/messages/`, {
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    user : user.user_id,
                    book_review : id,
                    body : inputValue
                })
            })
            if (response.status === 201) {
                useToastNotifications('Comment posted', 'success')
                inputRef.current.value = ''
            }
        } catch (e) {
            useToastNotifications('Something went wrong', 'error')
        }
    }

  return (
    <>
        {comments && <h2 className='my-10 uppercase font-bold text-2xl'>Comments ({comments.length > 0 ? (comments.length) : (0)})</h2>}
        <form onSubmit={(e) => mutatation.mutate(e)}>
            <label htmlFor='comment'></label>
            <textarea
                id='comment'
                name='comment'
                ref={inputRef}
                className="w-full max-h-[400px] min-h-[100px] sm:w-2/3 block  lg:w-1/3 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
             <button className='mt-10 bg-black text-white border p-2 px-4 rounded-xl hover:bg-slate-800 shadow-lg'>Comment</button>
        </form>
    </>
  )
}

export default Comment