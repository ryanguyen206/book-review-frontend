import React from 'react'
import Genre from '../components/HomePage/Genre'
import BookFeed from '../components/HomePage/BookFeed'
import Hero from '../components/HomePage/Hero'
import { useState, useEffect } from 'react'


const HomePage = () => {

  const [currentGenre, setCurrentGenre] = useState(null)
  useEffect(() => {
    console.log(currentGenre)
  
  }, [currentGenre])
  
  return (
    <div>
        <Hero/>
        <Genre
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
        <BookFeed
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
    </div>
  )
}

export default HomePage