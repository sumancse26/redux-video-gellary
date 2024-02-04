import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTags } from "../../apiCalling/videoApi";


const initialState= {
    isLoading: false,
    isError: false,
    error: '',
    tags: [],
}

//creating thunk
export const fetchTags = createAsyncThunk('tags/fetchTags', async ()=> {
    const tags = await getAllTags();
    return tags;
})

//creating Slice
const tagSlice = createSlice({
    name: 'tag',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
            state.tags = [];
        })
        builder.addCase(fetchTags.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.tags = action.payload;
        })
        builder.addCase(fetchTags.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.tags = [];
        
        })
    }

})

export default tagSlice.reducer;