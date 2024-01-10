import React from 'react'
import hero from '../../assets/hero.jpg'
import { useQuery } from 'react-query'
import { handleGetRequest } from '../../utils/helper'



const Hero = () => {

    const {data} = useQuery({
        queryKey:['reviews'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/book-review/`),
    })

    
  return (
    <div className='mt-20 text-indigo-500 md:mt-28'>
        <h1 className='text-center text-3xl md:text-5xl md:leading-tight  '>Discover, Review, Discuss  <br/> <span className='text-indigo-300'> Your Literary Haven</span> </h1>
        <h2></h2>
        <div className='mt-10'>   
           <img src={hero} className='h-64 w-full object-cover'/> 
        </div>
        <div className='text-center'>
            <div className='grid justify-center mt-20 md:flex md:justify-center md:gap-20'>
                    <div className='flex items-center gap-4 mb-6 md:mb-0 md:block'>
                        {data && <p className='text-4xl font-semibold'>{data.length}+</p>}
                        <h2 className='text-xl '>Reviews</h2>
                    </div>
                    <div className='flex items-center gap-4 md:block '>
                        <p className='text-4xl font-semibold'>20+</p>
                        <h2 className='text-xl '> Users</h2>
                    </div>
           
            </div>
            <div className='mt-10 text-xl text-center w-full mx-auto md:w-1/2 lg:w-1/3 md:text-2xl '>
                Embark on a literary journey. Engage in passionate book discussions, share reviews, and connect with readers!
            </div>
        </div>

    </div>
  )
}

export default Hero