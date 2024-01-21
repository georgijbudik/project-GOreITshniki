import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

// export const getCurrentUser = createAsyncThunk(
//   'users/getCurrentUser',
//   async (_, thunkAPI) => {
//     try {
//       // const state = thunkAPI.getState();
//       // const persistedToken = state.auth.token;
//       // axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

//       const response = await axios.get('/users/current');

//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const getDayInfo = createAsyncThunk(
  'users/getDayInfo',
  async (day, thunkAPI) => {
    try {
      const response = await axios.get(`/diary/day?date=${day}`);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
