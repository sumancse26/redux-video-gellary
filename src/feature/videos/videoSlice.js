import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from '../../apiCalling/videoApi';
// State definition
const initialState = {
	isLoading: false,
	isError: false,
	error: '',
	videos: []
};

//creating thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
	const videos = await getVideos();
	return videos;
});

//creating video slice
const videoSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isError = false;
				state.error = '';
				state.isLoading = true;
				state.videos = [];
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
				state.videos = [];
			});
	}
});

export default videoSlice.reducer;
