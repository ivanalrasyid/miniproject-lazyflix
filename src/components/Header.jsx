import React from 'react'
import "./Header.css"
import logo from "../img/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><img className="header_icon" src={logo} alt="Logo"/><h2 className="ms-2">Lazyflix</h2></Link>
        {/* <Link><span>Hallo</span></Link> */}
          <div className="navbar-list">
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
          </div>
      </div>
    </div>
  )
}

export default Header