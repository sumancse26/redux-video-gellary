import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo } from "../../apiCalling/videoApi";
//initial state
const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    video: {}
}

//creating thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id)=> {
    const video = await getSingleVideo(id);
    return video;
});

//creating slice
const videoSlice = createSlice({
    name: 'singleVideo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
            state.video = {};
        })
        builder.addCase(fetchVideo.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.video = action.payload;
        })
        builder.addCase(fetchVideo.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.video = {};
        })
    }
});

export default videoSlice.reducer;