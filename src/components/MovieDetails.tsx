import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faStar, faX } from '@fortawesome/free-solid-svg-icons'
import { MovieDetailsType } from '../types/MovieDetailsType'

type Props = {}

const MovieDetails = (props: Props) => {
	const [movie, setMovie] = useState<MovieDetailsType>()
	const { id } = useParams()
	const apiKey = process.env.REACT_APP_API_KEY
	const navigate = useNavigate()

	const fetchMovie = async () => {
		let fetchResult = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
		setMovie(fetchResult.data)
	}

	useEffect(() => {
		fetchMovie()
	}, [])

	return (
		<div className="movie-details">
			<div className="movie-details-inner">
				<div className="details-toolbar">
					<button
						onClick={() => {
							navigate(-1)
						}}
						className="close">
						<FontAwesomeIcon icon={faX} />
					</button>
				</div>
				<h2>{movie?.title}</h2>
				<div className="info">
					<span>
						<FontAwesomeIcon icon={faStar} /> {movie ? Math.floor(movie.vote_average * 10) / 10 : 0}
					</span>
					<span>
						<FontAwesomeIcon icon={faClock} /> {movie?.runtime}min
					</span>
					<span>
						<FontAwesomeIcon icon={faCalendar} /> {movie?.release_date.toString().slice(0, 4)}
					</span>
				</div>
				<p>{movie?.overview}</p>
			</div>
		</div>
	)
}

export default MovieDetails
