/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searchText } from '../../feature/filter/filterReducer';

const SearchBar = () => {
	const { search } = useSelector((state) => state.filter);
	const [input, setInput] = useState(search);
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const match = useMatch('/');

	//form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchText(input));
		if (!match) navigate('/');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="outline-none border-none mr-2"
				type="search"
				name="search"
				placeholder="Search"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
