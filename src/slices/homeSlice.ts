import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import VideoProp from './Types';

interface VideoState {
  items: VideoProp[];
  loading: boolean;
  error?: string;
}

const initialState: VideoState = {
  items: [],
  loading: true
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', 
  async (chart:string, thunkAPI) => {
  const apiUrl = import.meta.env.VITE_API_URL_HOMEPAGE;
  const apiKey = import.meta.env.VITE_API_KEY_;
  try{
    const response = await axios.get(`${apiUrl}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart,
        regionCode: 'IN',
        key: apiKey,
        maxResults: 24,
      },
    });
    return response.data.items;
  }catch(error:any){
    if (error.response && error.response.data){
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.error.message)
    }
  }
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch videos';
      });
  },
});

export default videoSlice.reducer;

