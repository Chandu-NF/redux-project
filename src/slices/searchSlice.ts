import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types.ts';

interface SearchVideoState {
  query: string;
  items: VideoProp[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: SearchVideoState = {
  query: '',
  items: [],
  status: 'idle',
};

export const fetchSearchVideos = createAsyncThunk(
  'searchVideos/fetchSearchVideos',
  async (query: string) => {
    const apiUrl = import.meta.env.VITE_API_URL_HOMEPAGE;
    const apiKey = import.meta.env.VITE_API_KEY_;

    const response = await axios.get(`${apiUrl}/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: apiKey,
        maxResults: 24,
      },
    });

    return response.data.items as VideoProp[];
  }
);

const searchVideoSlice = createSlice({
  name: 'searchVideos',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSearchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export const { setQuery } = searchVideoSlice.actions;

export default searchVideoSlice.reducer;
