import React, { useEffect, useState, useContext } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Cards.css"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalState";

const Cards = ({movie}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <>
      {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration: "none", color: "white"}}>
          <div className="cards">
            <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
            <div className="cards_overlay">
              <div className="cards_title">{movie?movie.original_title:""}</div>
              <div className="cards_runtime">
                {/* {movie?movie.relase_date:""} */}
                {/* <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-start" /></span> */}
                {/* <div className="card_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div> */}
                <div className="controls">
                  <button
                    className="btn btn-watch-list"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}
                  >
                    Add to Watchlist
                  </button>

                  <button
                    className="btn btn-watched"
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}
                  >
                    Add to Watched
                  </button>
                </div>
              </div>
              </div>
            </div>
        </Link>
      }
    </>
  )
}

export default Cards;