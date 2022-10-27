import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/home/MovieDetail/Movie';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;