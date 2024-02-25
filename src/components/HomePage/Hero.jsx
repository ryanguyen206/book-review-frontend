import React, {} from 'react'
import hero from '../../assets/hero.jpg'
import { useQuery } from 'react-query'
import { handleGetRequest } from '../../utils/helper'
import { TypeAnimation } from 'react-type-animation';
import Skeleton from '../Skeleton';



const Hero = () => {
 
    
    


    const {data, isFetching} = useQuery({
        queryKey:['reviews'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/book-review/`),
    })

    const {data : user_count, isFetching : isFetchingUser} = useQuery({
        queryKey:['user_count'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/user_count`),
    })

    
  return (
    <div className='mt-20 text-indigo-500 md:mt-28'>
        <h1 className='text-center text-3xl md:text-5xl md:leading-tight text-indigo-300'>Your Literary Haven </h1>
        <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    'Discover',
                    1000, 
                    'Discuss',
                    1000,
                    'Review',
                    1000,
                ]}
                wrapper="span"
                style={{ fontSize: '3rem', display: 'block', minHeight: '200px', textAlign:'center', marginTop:'4rem' }}
                speed={25}
                repeat={Infinity}
        />
        <div className='mt-6'>   
           <img src={hero} className='h-64 w-full object-cover'/> 
        </div>
        <div className='text-center'>
            <div className='grid justify-center mt-20 md:flex md:justify-center md:gap-20'>
                    <div className='flex items-center  gap-4 mb-6 md:mb-0 md:block'>
                        {isFetching ? <Skeleton/> :           
                        <>
                        {data && <p className='text-4xl font-semibold'>{data.length}+</p>}
                        <h2 className='text-xl '>Reviews</h2>
                        </>
      
                        }
              
                    </div>
                    <div className='flex items-center gap-4 md:block '>
                        {isFetching ? <Skeleton/> :
                        <>
                        {user_count && <p className='text-4xl font-semibold'>{user_count.user_count}+</p>}
                        <h2 className='text-xl '>Users</h2>
                        </>}                    
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