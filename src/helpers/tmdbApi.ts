import { Category } from '../types/Category'
import { MediaType } from '../types/MediaType'

// based on parameters, returns link for getting api data
export const getAPILink = (
	mediaType: MediaType,
	category: Category,
	page: number,
	apiKey: string | undefined
): string => {
	const prefix = 'https://api.themoviedb.org/3'
	const sufix = `?api_key=${apiKey}&page=${page}`

	switch (category) {
		case Category.Trending:
			return `${prefix}/trending/${mediaType}/day${sufix}`

		case Category.New:
			return `${prefix}/${mediaType}/${mediaType === MediaType.Movie ? 'now_playing' : 'on_the_air'}${sufix}`

		case Category.Top:
			return `${prefix}/${mediaType}/top_rated${sufix}`

		default:
			return prefix
	}
}
