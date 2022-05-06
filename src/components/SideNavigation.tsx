import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons'

import SideNavigationItem from './SideNavigationItem'

type Props = {}

const SideNavigation = (props: Props) => {
	return (
		<div className="side-navigation">
			<SideNavigationItem text="Movies" link="/movies" icon={faFilm} />
			<SideNavigationItem text="TV" link="/tv" icon={faTv} />
		</div>
	)
}

export default SideNavigation
