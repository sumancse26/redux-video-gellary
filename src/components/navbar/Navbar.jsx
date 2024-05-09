import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import logoImage from '../../assets/developer.webp';
import searchImage from '../../assets/search.svg';
const Navbar = () => {
	return (
		<nav className="bg-slate-100 shadow-md">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
				<Link to="/">
					<img className="h-12 w-12 rounded-full" src={logoImage} alt="Learn Yourself" />
				</Link>
				<div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
					<SearchBar />
					<img className="inline h-4 cursor-pointer" src={searchImage} alt="Search" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
