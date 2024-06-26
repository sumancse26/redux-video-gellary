import axios from 'axios';

//call video api
export const getVideos = async ({tags, search}) => {
    let queryString =  "";
    if(tags?.length > 0){
        queryString += tags.map(tag => 
            `tags_like=${tag.title}`
        ).join('&');
    }

    if(search !== ""){
        queryString += `&q=${search}`
    }

	const res = await axios.get(`https://json-server-sigma-eight.vercel.app/videos/?${queryString}`);

	return res.data;
};
//call tag api
export const getAllTags = async () => {
	const res = await axios.get('https://json-server-sigma-eight.vercel.app/tags');

	return res.data;
};
//call  related video api
export const getRelatedVideo = async (id, tags) => {
    const limit = 5;
    let queryString = tags?.length > 0 ? tags.map(tag => 
        `tags_like=${tag}`
    ).join('&') + `&id_ne=${id}&_limit=${limit}` : `id_ne=${id}&_limit=${limit}`
	const res = await axios.get(`https://json-server-sigma-eight.vercel.app/videos?${queryString}`);

	return res.data;
};
//call single video api
export const  getSingleVideo = async (id) => {

	const res = await axios.get(`https://json-server-sigma-eight.vercel.app/videos/${id}`);

	return res.data;
};