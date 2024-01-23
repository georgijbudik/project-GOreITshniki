import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';

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
  'diary/getDayInfo',
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

export const deleteProduct = createAsyncThunk(
  'diary/deleteProduct',
  async (data, thunkAPI) => {
    try {
      const { id, date } = data;
      await axios.delete(`/diary/products/${id}?date=${date}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
