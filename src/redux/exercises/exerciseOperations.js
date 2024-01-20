import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('exercises/getExercises');
      const response = await axios.get('/exercises');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercisesBodyparts = createAsyncThunk(
  'exercises/fetchBodyParts',
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
  'exercises/fetchMuscules',
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
  'exercises/fetchEquipment',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/equipments');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//* ============================

axios.defaults.baseURL = 'http://localhost:3001';

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
//* ============================

// export const getExercisesBodyparts = createAsyncThunk(
//   'exercises/getExercisesBodyparts',
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const persistedToken = state.auth.token;
//       axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

//       const response = await axios.get('/exercises/groups/bodyparts');
//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const getExercisesMuscles = createAsyncThunk(
//   'exercises/getExercisesMuscles',
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const persistedToken = state.auth.token;
//       axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

//       const response = await axios.get('/exercises/groups/muscles');
//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const getExercisesEquipment = createAsyncThunk(
//   'exercises/getExercisesEquipment',
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const persistedToken = state.auth.token;
//       axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

//       const response = await axios.get('/exercises/groups/equipment');
//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
