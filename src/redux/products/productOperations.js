import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('products/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (dataFromForm, thunkAPI) => {
    const { search, category, recommendation, page, limit } = dataFromForm;
    try {
      const response = await axios.get(
        `products?search=${search}&category=${category}&type=${recommendation}&page=${page}&limit=${limit}`
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
