import Header from './components/Header';
import './App.css';
import Movie from './components/Movie';
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import { API_OPTIONS } from './utils/constant';
import {useState , useEffect} from "react";

function App() {

  const [movieData , setMovieData] = useState([]);

  const nowPlayingMovies = async()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await res.json();
    console.log(json);
    setMovieData(json.results);
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[])
  return (
  
    <div className="App">
      <Header />
      <Navbar/>
    
      
      <div className="main">
        {movieData.map((element) => {
          return (
            <Movie
              key = {element.id} data = {element}
            />
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
