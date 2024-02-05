import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    tags: [],
    search:''
}
//creating reducer
const filterReducer = createSlice({
    name: 'filterReducer',
    initialState,
    reducers: {
        tagsSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagsRemoved: (state, action) => {
            const selectedIndex = state.tags.indexOf(action.payload);
            if(selectedIndex !== -1){
                state.tags.splice(selectedIndex, 1);
            }
        },
        searchText: (state, action) => {
            state.search = action.payload;
        
        }
    }
});

export default filterReducer.reducer;
export const { tagsSelected, tagsRemoved, searchText } = filterReducer.actions;