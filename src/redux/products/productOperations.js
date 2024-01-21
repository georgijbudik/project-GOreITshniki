import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toastError } from '../../redux/helpers/toastCase';

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

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (dataFromForm, thunkAPI) => {
    const { productId, date, weight } = dataFromForm;
    try {
      const response = await axios.patch(`/diary/product/${productId}`, {
        date,
        weight,
      });
      return response;
    } catch (error) {
      toastError('Something went wrong. Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
