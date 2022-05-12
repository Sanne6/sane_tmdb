import NavigationItem from './NavigationItem'
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Navigation = (props: Props) => {
	return (
		<div className="navigation">
			<NavigationItem text="Movies" link="/movies" icon={faFilm} />
			<NavigationItem text="TV" link="/tv" icon={faTv} />
		</div>
	)
}

export default Navigation
