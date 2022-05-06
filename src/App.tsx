import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SideNavigation from './components/SideNavigation'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<SideNavigation />

				<Routes>
					<Route path="/" element={<div>home</div>} />
					<Route path="/movies" element={<div>movies</div>} />
					<Route path="/tv" element={<div>tv</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
