import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from 'utils/toastStyles';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com';

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
      const res = await axios.post('/api/users/register ', credentials);
      toast.success(
        `Congratulation! You were successfully registrated`,
        toastStyles
      );
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`, toastStyles);
      return thunkAPI.rejectWithValue(error.message);
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
      const res = await axios.post('api/users/login', credentials);
      setAuthHeader(res.data.token);
      // console.log('first', res.data);
      toast.success(`You were successfully login`, toastStyles);
      return res.data;
    } catch (error) {
      toast.error(
        `Something went wrong. ${error.message}. Try again...`,
        toastStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    clearAuthHeader();
    toast.success(`You were successfully logout`, toastStyles);
  } catch (error) {
    toast.error(`Something went wrong. Try another time..`, toastStyles);
    return thunkAPI.rejectWithValue(error.message);
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
      const res = await axios.get('api/users/current');
      console.log('curent user');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
