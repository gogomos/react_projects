import React from 'react'
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import noex from "../images/donotex.jpg"
const CardMovie = ({item}) => {
  const handleImageError = (e) => {
    e.target.src = noex;
  };

  const url = "https://image.tmdb.org/t/p/w500/"
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
    <Link to={`/movie/${item.id}`}>
    <div className="card">
      <img src={url + item.poster_path} className="card__image" alt="hu"  onError={handleImageError} />
      <div className="card__overlay">
        <div className="overlay__text text-center w-100 p-2">
          <p>Movie name: {item.title}</p>
          <p>Date: {item.release_date}</p>
          <p>Rating: {item.vote_average}</p>
          <p>Original language: {item.original_language}</p>
        </div>
      </div>
    </div>
    </Link>
  </Col >
  )
}

export default CardMovie
