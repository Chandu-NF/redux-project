import { configureStore } from '@reduxjs/toolkit';
import exploreVideoReducer from './slices/exploreSlice';
import videoReducer from './slices/homeSlice';
import searchVideoReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    videos: videoReducer,
    exploreVideos: exploreVideoReducer,
    searchVideos: searchVideoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
