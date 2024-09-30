import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types.ts';

interface SearchVideoState {
  items: VideoProp[];
  loading: boolean;
  error?: string;
}

const initialState: SearchVideoState = {
  items: [],
  loading: true,
};

export const fetchSearchVideos = createAsyncThunk(
  'searchVideos/fetchSearchVideos',
  async (query: string, thunkAPI) => {
    const apiUrl = import.meta.env.VITE_API_URL_HOMEPAGE;
    const apiKey = import.meta.env.VITE_API_KEY_;
    try{
      const response = await axios.get(`${apiUrl}/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          key: apiKey,
          maxResults: 24,
        },
      });
      return response.data.items;
    }catch(error: any){
    if (error.response && error.response.data){
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
}
    
);

const searchVideoSlice = createSlice({
  name: 'searchVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSearchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch videos';
      });
  },
});


export default searchVideoSlice.reducer;
