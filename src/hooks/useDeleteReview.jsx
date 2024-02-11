import React, {useContext} from 'react'
import { handleDeleteReview } from '../utils/helper'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import AuthContext from '../context/AuthContext'

const useDeleteReview = () => {
    let {authTokens} = useContext(AuthContext)

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (id) => handleDeleteReview(id, authTokens),
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['reviews'] })
        }
     })


  return {mutation}
}

export default useDeleteReview