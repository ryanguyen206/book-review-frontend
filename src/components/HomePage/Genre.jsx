import React from 'react'
import useGenre from '../../hooks/useGenre'
import { v4 as uuidv4 } from 'uuid';

const Genre = ({setCurrentGenre, currentGenre, setCurrentPage}) => {

  
    let {genres} = useGenre()

    const handleGenreClick = (genre) => {
        setCurrentGenre((prevGenre) => (prevGenre === genre ? null : genre));
        setCurrentPage(1)
    };
    

    return (
        <div className='mt-20 text-center text-indigo-400'>
            <h3 className='text-3xl mb-10 text-stone-500 font-bold '>Browse reviews through genres</h3>
            <div className='flex justify-center gap-6'>
                {genres?.map(genre => (
                    <button onClick={() => handleGenreClick(genre)} key={uuidv4()}  className={`p-4 rounded-xl border ${
                        currentGenre === genre ? 'bg-indigo-400 text-white' : 'border-indigo-400 hover:bg-indigo-400 hover:text-white'}`}>
                        {genre}
                    </button>
                ))}
            </div>
         
        </div>
    )
}

export default Genre