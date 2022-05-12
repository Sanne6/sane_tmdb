import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../types/Movie'

type Props = {
	movie: Movie
}

const MovieItem = ({ movie }: Props) => {
	return (
		<Link to={`${movie.id}`} className="movie-item">
			<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} movie poster`} />
			<h4>{movie.title}</h4>
		</Link>
	)
}

export default MovieItem
