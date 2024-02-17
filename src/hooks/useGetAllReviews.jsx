import React from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest } from '../utils/helper'


const useGetAllReviews = () => {

    const {data} = useQuery({
        queryKey:['reviews'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/book-review/`),
    })

    return {data}
}

export default useGetAllReviews