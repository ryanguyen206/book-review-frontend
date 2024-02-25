import React from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest } from '../utils/helper'


const useGetAllReviews = () => {

    const {data, isFetching} = useQuery({
        queryKey:['reviews'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/book-review/`),
    })

    return {data, isFetching}
}

export default useGetAllReviews