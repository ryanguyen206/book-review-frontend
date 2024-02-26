import React from 'react'
import Genre from '../components/HomePage/Genre'
import BookFeed from '../components/HomePage/BookFeed'
import Hero from '../components/HomePage/Hero'
import { useState, useEffect } from 'react'


const HomePage = () => {

  const [currentGenre, setCurrentGenre] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div>
        <Hero/>
        <Genre
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
          setCurrentPage={setCurrentPage}
        />
        <BookFeed
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
    </div>
  )
}

export default HomePage