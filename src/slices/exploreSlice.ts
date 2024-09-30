import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types.ts';

interface ExploreVideoState {
  items: VideoProp[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ExploreVideoState = {
  items: [],
  status: 'idle',
};

export const fetchExploreVideos = createAsyncThunk(
  'exploreVideos/fetchExploreVideos',
  async () => {
    const apiUrl: string = import.meta.env.VITE_API_URL_HOMEPAGE;
    const apiKey: string = import.meta.env.VITE_API_KEY_;
    
    const response = await axios.get(`${apiUrl}/search`, {
      params: {
        part: 'snippet',
        q: 'Java',
        type: 'video',
        key: apiKey,
        maxResults: 24,
      },
    });
    
    return response.data.items as VideoProp[];
  }
);

const exploreVideoSlice = createSlice({
  name: 'exploreVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExploreVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExploreVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchExploreVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export default exploreVideoSlice.reducer;

