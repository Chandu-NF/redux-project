import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types';

interface VideoState {
  items: VideoProp[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: VideoState = {
  items: [],
  status: 'idle'
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const apiUrl = import.meta.env.VITE_API_URL_HOMEPAGE;
  const apiKey = import.meta.env.VITE_API_KEY_;

  const response = await axios.get(`${apiUrl}/videos`, {
    params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: 'IN',
      key: apiKey,
      maxResults: 24,
    },
  });
  return response.data.items;
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export default videoSlice.reducer;

