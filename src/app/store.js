import { configureStore } from '@reduxjs/toolkit';
import tagReducer from '../feature/tags/tagSlice';
import singleVideoReducer from '../feature/video/singleVideoSlice';
import videoReducer from '../feature/videos/videoSlice';

export const store = configureStore({
	reducer: {
		videos: videoReducer,
        tags: tagReducer,
        video: singleVideoReducer
	}
});
