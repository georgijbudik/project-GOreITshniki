import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com';

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
      toast.success(`Congratulation! You were successfully registrated`, {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`, {
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
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
      toast.success(`You were successfully login`, {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong. ${error.message}. Try again...`, {
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    clearAuthHeader();
    toast.success(`You were successfully logout`, {
      duration: 2000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  } catch (error) {
    toast.error(`Something went wrong. Try another time..`, {
      duration: 3000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
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
