import axios from 'axios';

export const getVideos = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users');

	return res.data;
};
