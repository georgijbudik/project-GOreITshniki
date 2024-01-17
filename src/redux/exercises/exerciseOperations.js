import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

      const response = await axios.get('/exercises');

      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getExercisesFilter = createAsyncThunk(
  'exercises/getExercisesFilter',
  async (paramsExe, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

      const response = await axios.get(
        `/exercises?filter=${paramsExe.filter}&name=${paramsExe.name}`
      );
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getExercisesMuscles = createAsyncThunk(
  'exercises/getExercisesMuscles',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

      const response = await axios.get('/exercises/groups/muscles');
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getExercisesEquipment = createAsyncThunk(
  'exercises/getExercisesEquipment',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

      const response = await axios.get('/exercises/groups/equipment');
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getExercisesBodyparts = createAsyncThunk(
  'exercises/getExercisesBodyparts',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

      const response = await axios.get('/exercises/groups/bodyparts');
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
