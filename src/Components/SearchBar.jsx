/* eslint-disable react/prop-types */
//import React from 'react'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div>
      <div className="flex justify-center px-5 py-5 input lg:px-0">
        <input
          type="text"
          placeholder='Search here'
          value={searchMovie}
          onChange={(e)=> setSearchMovie(e.target.value)}
          className='px-2 py-2 text-black placeholder-gray-400 bg-gray-200 border-2 border-gray-500 rounded-l-lg shadow-md outline-none w-80' 
        />
        <button
        onClick={fetchMovieData}
          className='bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500 '>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar