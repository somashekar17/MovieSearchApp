/* eslint-disable react/prop-types */
//import React from 'react'

// eslint-disable-next-line react/prop-types
function MovieCard({ allMovieData, loading }) {
  return (
    <div>
      {loading ?
        <div className='flex justify-center '>
          <img className='w-16 py-20 ' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>
        :
        <div className='flex flex-wrap px-4 lg:px-10 '>
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item
            return (
              <div key={index} className="w-full p-2 md:w-1/4">
                <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                  <img className='w-full h-full mb-2 rounded-lg' src={Poster} alt="" />
                  <h2 className='text-xl font-bold text-white'>{Title}</h2>
                  <h2 className='mb-2 text-lg text-white'>Year : {Year}</h2>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default MovieCard