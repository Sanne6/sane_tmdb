import { Genre } from './Genre'
import { Movie } from './Movie'

export type MovieDetailsType = Movie & {
	belongs_to_collection: {}
	budget: number
	genres: Genre[]
	homepage: string
	imdb_id: string
	production_companies: { id: number; logo_path: string; name: string }[]
	production_countries: { iso_3166_1: string; name: string }[]
	revenue: number
	runtime: number
	spoken_languages: { iso_639_1: string; name: string }[]
	status: string
	tagline: string
}
