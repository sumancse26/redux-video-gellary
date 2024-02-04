import axios from 'axios';

//call video api
export const getVideos = async () => {
	const res = await axios.get('http://localhost:9000/videos');

	return res.data;
};
//call tag api
export const getAllTags = async () => {
	const res = await axios.get('http://localhost:9000/tags');

	return res.data;
};
//call single video api
export const getSingleVideo = async (id) => {
	const res = await axios.get(`http://localhost:9000/videos/${id}`);

	return res.data;
};
