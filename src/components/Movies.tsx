import { NavLink, Outlet } from 'react-router-dom'

const Movies = () => {
	return (
		<div className="main-section">
			<nav className="categories">
				<NavLink to="trending" className={({ isActive }) => 'categories-item' + (isActive ? ' active' : '')}>
					#Trending
				</NavLink>
				<NavLink to="new" className={({ isActive }) => 'categories-item' + (isActive ? ' active' : '')}>
					#In Theaters
				</NavLink>
				<NavLink to="top" className={({ isActive }) => 'categories-item' + (isActive ? ' active' : '')}>
					#Top Rated
				</NavLink>
			</nav>

			<Outlet />
		</div>
	)
}

export default Movies
