import {useEffect} from "react";
import "./App.css";
import SearchIcon from './search.svg';
// d44009c7

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d44009c7";


const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
    useEffect(() =>{
      searchMovies('Spiderman');
    },[]);

  return (
    <div className="App">
    <h1>MovieLand</h1>
    </div>
    
  );
}

export default App;
