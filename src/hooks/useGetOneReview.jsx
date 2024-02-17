import React from 'react'
import { useQuery } from 'react-query'
import { handleGetRequest } from '../utils/helper'

const useGetOneReview = (id, url) => {
  
    const {data : review} = useQuery({
        queryKey:['reviews', id],
        queryFn: () => handleGetRequest(url),
    })


    return {review}
    



}

export default useGetOneReview