import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "../../apiCalling/videoApi";


const initialState= {
    isLoading: false,
    isError: false,
    error: '',
    videos: [],
}

//creating thunk
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({id, tags})=> {
    
    const videos = await getRelatedVideo(id, tags);
    return videos;
})

//creating Slice
const relatedVideoSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
            state.videos = [];
        })
        builder.addCase(fetchRelatedVideos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.videos = action.payload;
        })
        builder.addCase(fetchRelatedVideos.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.videos = [];
        
        })
    }

})

export default relatedVideoSlice.reducer;