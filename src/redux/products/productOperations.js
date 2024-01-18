import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://backend-project-dl3a.onrender.com';

export const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/products/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (dataFromForm, thunkAPI) => {
    const { search, category, recommendation } = dataFromForm;
    try {
      const response = await axios.get(
        `api/products?search=${search}&category=${category}&type=${recommendation}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addProduct = createAsyncThunk(
//     'product/addProduct',
//     async (dataFromForm, thunkAPI) => {
//       try {
//         const response = await axios.post('/diary', dataFromForm);
//         return response;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );
