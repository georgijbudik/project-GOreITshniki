import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastError, toastSuccess } from '../helpers/toastCase';

axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
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
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('users/current');
      // console.log('first', res.data);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/login', credentials);
      setAuthHeader(res.data.token);
      toastSuccess('You were successfully login', res.data.email);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
      // console.log('first', res.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
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
      const res = await axios.post('users/avatar', credentials);
      setAuthHeader(res.data.token);
      // toastSuccess('You were successfully login', res.data.email);
      console.log(res);
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
