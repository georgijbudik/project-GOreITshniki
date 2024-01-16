// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchCategories = createAsyncThunk(
//   'product/fetchCategories',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/categories');
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const fetchProducts = createAsyncThunk(
//     'product/fetchProducts',
//     async (_, thunkAPI) => {
//       try {
//         const response = await axios.get('/products');
//         return response;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );

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
