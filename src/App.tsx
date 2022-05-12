import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import Movies from './components/Movies'
import MoviesGrid from './components/MoviesGrid'

import Navigation from './components/Navigation'
import { Category } from './types/Category'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />

				<Routes>
					<Route path="/" element={<div>home</div>} />
					<Route path="/movies" element={<Movies />}>
						{/* <Route index element={} /> */}
						<Route path="trending" element={<MoviesGrid key="trending" category={Category.Trending} />}>
							<Route path=":id" element={<MovieDetails />} />
						</Route>
						<Route path="new" element={<MoviesGrid key="new" category={Category.New} />}>
							<Route path=":id" element={<MovieDetails />} />
						</Route>
						<Route path="top" element={<MoviesGrid key="top" category={Category.Top} />}>
							<Route path=":id" element={<MovieDetails />} />
						</Route>
					</Route>
					<Route path="/tv" element={<div>tv</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
