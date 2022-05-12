import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getAPILink } from '../helpers/tmdbApi'
import { Category } from '../types/Category'
import { MediaType } from '../types/MediaType'
import { Movie } from '../types/Movie'
import MovieItem from './MovieItem'

type Props = {
	category: Category
}

const MoviesGrid = ({ category }: Props) => {
	const [movies, setMovies] = useState<Movie[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [page, setPage] = useState(1)
	const apiKey = process.env.REACT_APP_API_KEY

	const fetchMovies = async () => {
		let fetchResult = await axios(getAPILink(MediaType.Movie, category, page, apiKey))

		setMovies([...movies, ...fetchResult.data.results])
		setIsLoading(false)
	}

	useEffect(() => {
		fetchMovies()
	}, [page])

	return (
		<div className="movies">
			<div className="movies-grid">
				{isLoading ? <p>loading...</p> : movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
			</div>

			<div className="load-more">
				<button onClick={() => setPage(page + 1)}>Gimme More</button>
			</div>

			<Outlet />
		</div>
	)
}

export default MoviesGrid
