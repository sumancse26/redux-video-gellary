import axios from 'axios';

//call video api
export const getVideos = async () => {
	const res = await axios.get('http://localhost:9000/videos');

	return res.data;
};
//call teg api
export const getAllTags = async () => {
	const res = await axios.get('http://localhost:9000/tags');

	return res.data;
};
