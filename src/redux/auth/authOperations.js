import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastError, toastSuccess } from '../../redux/helpers/toastCase';

axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/register', credentials);
      toastSuccess(
        'Congratulation! You were successfully registrated',
        res.data.name
      );
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/login', credentials);
      setAuthHeader(res.data.token);
      toastSuccess('You were successfully login', res.data.email);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('users/logout');
    clearAuthHeader();
    toastSuccess(_, res.data.message);
  } catch (error) {
    toastError(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('users/update', credentials);
      console.log(res.data);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/avatar', credentials, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
