import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/exercises');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesByType = createAsyncThunk(
  'exercises/getExercisesByType',
  async (type, thunkAPI) => {
    console.log('type', type);
    try {
      const res = await axios.get(`exercises/${type}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesBodyparts = createAsyncThunk(
  'exercises/getExercisesBodyparts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/bodyparts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesMuscles = createAsyncThunk(
  'exercises/getExercisesMuscles',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/muscules');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesEquipment = createAsyncThunk(
  'exercises/getExercisesEquipment',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/equipments');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesFilter = createAsyncThunk(
  'exercises/getExercisesFilter',
  async (paramsExe, thunkAPI) => {
    try {
      const response = await axios.get(
        `/exercises/${paramsExe.type}/${paramsExe.name}?page=${
          paramsExe.page || 1
        }&limit=${paramsExe.limit || 10}`
      );
      console.log('API Response:', response.data);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addExerciseToDiary = createAsyncThunk(
  'exercises/addToDiary',
  async (data, thunkAPI) => {
    try {
      const { id, date, time } = data;
      const response = await axios.patch(`/diary/exercise/${id}`, {
        date,
        time,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
