import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/video/:id" element={<Video />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
