import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { Container} from "react-bootstrap";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const getAllMovies = async() => {
   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8ad423b5ff157d90813364b2b236223f&language=en-US&page=1")
  //  console.log(res)
   setMovies(res.data.results)
   setPageCount(res.data.total_pages)
  }
  const getPage = async(page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8ad423b5ff157d90813364b2b236223f&language=en-US&page=${page}`)
   //  console.log(res)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
   }
  useEffect(() => {
    getAllMovies()
  }, [])
  const search =async (word) => {
    if (word === "") {
      getAllMovies();
    }else {
      const res =await axios(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=8ad423b5ff157d90813364b2b236223f`)
     setMovies(res.data.results)
     setPageCount(res.data.total_pages)
    }
  }
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
      </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
