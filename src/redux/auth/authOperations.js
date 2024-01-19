import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastError, toastSuccess } from '../../redux/helpers/toastCase';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * body: { name, email, password }
 */
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

/*
 * body: { email, password }
 */
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
      // console.log('first', res.data);
    } 
  }
);

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
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// export const getUserInfo = async () => {
//   try {
//     const response = await axios.get('/users/current');
//     console.log('user auth', response.data);
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// };
