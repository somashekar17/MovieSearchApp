//import React from 'react'
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'


function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  
  const [loading, setLoading] = useState(false);
    const fetchMovieData = async () => {
    try {
        setLoading(true);
        const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
        const data = await res.json();
        setAllMovieData(data.Search);
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  return (
    <div>
      <Navbar />
      <div className="bg ">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <Movie allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  )
}

export default App
