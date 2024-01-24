import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastError, toastSuccess } from '../helpers/toastCase';

axios.defaults.baseURL = 'http://localhost:3001/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const updateUser = createAsyncThunk(
  'profile/update',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('users/update', credentials);
      setAuthHeader(res.data.token);
      toastSuccess('You were successfully login', res.data.email);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'profile/avatar',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/avatar', credentials, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      // setAuthHeader(res.data.token);
      // toastSuccess('You were successfully login', res.data.email);

      return res.data;
    } catch (error) {
      console.log(error);
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);