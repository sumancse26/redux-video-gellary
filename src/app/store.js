import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../feature/videos/videoSlice';

export const store = configureStore({
	reducer: {
		videos: videoReducer
	}
});
